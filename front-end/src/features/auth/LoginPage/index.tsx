import { Form } from "antd";
import { TitleStyled } from "../../../shared/components/Typograph";
import Logo from "../../../../public/logo.svg";
import { InputStyled, InputPwd } from "../../../shared/components/Inputs";
import { authWebRoutes } from "../../../routes/webRoutes";
import BtnWithLoading from "../../../shared/components/Buttons";
import { Centered } from "../auth.styled";
import { LinkStyled } from "../../../shared/components/Buttons/Links";
const { Item } = Form;

const LoginPage = () => {
  return (
    <Centered>
      <TitleStyled>
        <img src={Logo} alt="Imagem Sujeito Pizza" />
      </TitleStyled>
      <Form onFinish={(e) => console.log(e)} layout="horizontal">
        <Item
          name={"email"}
          rules={[{ required: true, message: "Campo obrigatório" }]}
        >
          <InputStyled />
        </Item>
        <Item
          name={"password"}
          rules={[{ required: true, message: "Campo obrigatório" }]}
        >
          <InputPwd />
        </Item>
        <BtnWithLoading loading={false} type="submit">
          Enviar
        </BtnWithLoading>
      </Form>
      <LinkStyled to={`${authWebRoutes.auth}/${authWebRoutes.signUp}`}>
        Não possui uma conta? Cadastre-se
      </LinkStyled>
    </Centered>
  );
};

export default LoginPage;
