import { Form, Modal, Typography, Upload, UploadFile } from "antd";
import { Main } from "../../shared/Main";
import { useQuery } from "@tanstack/react-query";
import { listCategoryService } from "../category/category.service";
import { OptionTypeSelect } from "../../shared/Models/select";
import { OptionStd, SelectStd } from "./product.styled";
import { BtnSubmit } from "../../shared/components/Buttons/buton.styled";
import { InputStyled, TextAreaStyled } from "../../shared/components/Inputs";
import { Label } from "../../shared/components/Typograph";
import { RcFile } from "antd/es/upload";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";

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

  return (
    <Main>
      <Title>Novo produto</Title>
      <Form layout="vertical" onFinish={(e) => console.log(e)}>
        <Item getValueFromEvent={normFile}>
          <Upload
            accept="image/png, image/jpeg"
            beforeUpload={() => {
              return false;
            }}
            maxCount={1}
            listType="picture-card"
            onPreview={handlePreview}
          >
            <PlusOutlined style={{ color: "white" }} />
          </Upload>
        </Item>
        <Item name="categoria" label={<Label>Categoria</Label>}>
          <SelectStd>
            {getCategory.data &&
              getCategory.data.map((category) => (
                <OptionStd key={category.id} value={category.id}>
                  {category.name}
                </OptionStd>
              ))}
          </SelectStd>
        </Item>
        <Item name="nomeProduto" label={<Label>Nome Produto</Label>}>
          <InputStyled />
        </Item>
        <Item name="preco" label={<Label>Preco</Label>}>
          <InputStyled />
        </Item>
        <Item name="descricao" label={<Label>Descricao</Label>}>
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
