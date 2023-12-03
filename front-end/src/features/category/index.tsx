import { Form } from "antd";
import { MainCategory } from "./category.styled";
import { InputStyled } from "../../shared/components/Inputs";
import { Label, TitleStyled } from "../../shared/components/Typograph";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { CreateCategory } from "./category.schemas";
import { createCategoryService } from "./category.service";
import { BtnWithLoadingSubmit } from "../../shared/components/Buttons";
const { Item } = Form;

const Category = () => {
  const includeCategory = useMutation({
    mutationFn: (body: CreateCategory) => createCategoryService(body),
    onError(err) {
      toast.error(err.message);
    },
    onSuccess() {
      toast.success("Categoria criada com sucesso");
    },
  });

  return (
    <MainCategory>
      <Form layout="vertical" onFinish={includeCategory.mutate}>
        <TitleStyled>Cadastrar categorias</TitleStyled>
        <Item
          name={"name"}
          label={<Label>Nome</Label>}
          rules={[{ required: true, message: "Campo obrigatório" }]}
        >
          <InputStyled />
        </Item>

        <BtnWithLoadingSubmit loading={includeCategory.isPending}>
          Cadastrar
        </BtnWithLoadingSubmit>
      </Form>
    </MainCategory>
  );
};

export default Category;
