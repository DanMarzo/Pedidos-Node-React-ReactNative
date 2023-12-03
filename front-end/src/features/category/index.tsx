import { Form } from "antd";
import { MainCategory } from "./category.styled";
import { InputStyled } from "../../shared/components/Inputs";
import { BtnSubmit } from "../../shared/components/Buttons/buton.styled";
import { Label, TitleStyled } from "../../shared/components/Typograph";
const { Item } = Form;
const Category = () => {
  return (
    <MainCategory>
      <Form layout="vertical">
        <TitleStyled>Cadastrar categorias</TitleStyled>
        <Item
          name={"teste"}
          label={<Label>Nome</Label>}
          rules={[{ required: true, message: "Campo obrigatório" }]}
        >
          <InputStyled />
        </Item>
        <BtnSubmit>Cadastrar</BtnSubmit>
      </Form>
    </MainCategory>
  );
};

export default Category;
