import { Form, Modal, Spin, Typography, Upload, UploadFile } from "antd";
import { Main } from "../../shared/Main";
import { useMutation, useQuery } from "@tanstack/react-query";
import { listCategoryService } from "../category/category.service";
import { OptionTypeSelect } from "../../shared/Models/select";
import { OptionStd, SelectStd } from "./product.styled";
import { BtnSubmit } from "../../shared/components/Buttons/buton.styled";
import { InputStyled, TextAreaStyled } from "../../shared/components/Inputs";
import { Label } from "../../shared/components/Typograph";
import { RcFile } from "antd/es/upload";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { createProductService } from "./product.services";
import { toast } from "react-toastify";

const { Item } = Form;
const { Title } = Typography;
const Products = () => {
  const getCategory = useQuery({
    queryKey: ["getCategory"],
    queryFn: () => listCategoryService(),
  });
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
    );
  };
  const handleCancel = () => setPreviewOpen(false);

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    } else return e?.fileList;
  };

  const createProduct = useMutation({
    mutationFn: (body: any) => createProductService(body),
    onSuccess() {
      toast.success("CERTO");
    },
    onError() {
      toast.error("ERRO");
    },
  });

  return (
    <Spin spinning={createProduct.isPending}>
      <Main>
        <Title>Novo produto</Title>
        <Form layout="vertical" onFinish={(e) => createProduct.mutate(e)}>
          <Item name="fileImage" getValueFromEvent={normFile}>
            <Upload
              accept="image/png, image/jpeg"
              // beforeUpload={() => {
              //   return false;
              // }}
              maxCount={1}
              listType="picture-card"
              onPreview={handlePreview}
            >
              <PlusOutlined style={{ color: "white" }} />
            </Upload>
          </Item>
          <Item name="category_id" label={<Label>Categoria</Label>}>
            <SelectStd>
              {getCategory.data &&
                getCategory.data.map((category) => (
                  <OptionStd key={category.id} value={category.id}>
                    {category.name}
                  </OptionStd>
                ))}
            </SelectStd>
          </Item>
          <Item name="name" label={<Label>Nome Produto</Label>}>
            <InputStyled />
          </Item>
          <Item name="price" label={<Label>Preco</Label>}>
            <InputStyled />
          </Item>
          <Item name="description" label={<Label>Descricao</Label>}>
            <TextAreaStyled />
          </Item>
          <BtnSubmit />
        </Form>
        <Modal
          open={previewOpen}
          title={previewTitle}
          footer={null}
          onCancel={handleCancel}
        >
          <img alt="example" style={{ width: "100%" }} src={previewImage} />
        </Modal>
      </Main>
    </Spin>
  );
};
const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export default Products;
