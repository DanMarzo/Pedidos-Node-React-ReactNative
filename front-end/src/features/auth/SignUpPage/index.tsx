import { Form } from "antd";
import { Label, TitleStyled } from "../../../shared/components/Typograph";
import { Centered } from "../auth.styled";
import { InputPwd, InputStyled } from "../../../shared/components/Inputs";
import BtnWithLoading from "../../../shared/components/Buttons";
import { LinkStyled } from "../../../shared/components/Buttons/Links";
import Logo from "../../../../public/logo.svg";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { http } from "../../../infra/axios";

const { Item } = Form;
const SignUpPage = () => {
  const register = useMutation({
    mutationFn: (body) => http.post("/users", body),
    onSuccess() {
      toast.success("Cadastro feito com sucesso");
      location.href = "/auth/logIn";
    },
    onError(error) {
      toast.error(`Erro: ${error}`);
    },
  });
  return (
    <Centered>
      <TitleStyled>
        <img src={Logo} alt="Imagem Sujeito Pizza" />
      </TitleStyled>
      <TitleStyled>Crie sua conta</TitleStyled>
      <Form onFinish={(e) => register.mutate(e)} layout="vertical">
        <Item
          label={<Label>Nome</Label>}
          name={"name"}
          rules={[{ required: true, message: "Campo obrigatório" }]}
        >
          <InputStyled />
        </Item>
        <Item
          label={<Label>Email</Label>}
          name={"email"}
          rules={[{ required: true, message: "Campo obrigatório" }]}
        >
          <InputStyled />
        </Item>
        <Item
          label={<Label>Senha</Label>}
          name={"password"}
          rules={[{ required: true, message: "Campo obrigatório" }]}
        >
          <InputPwd />
        </Item>
        <BtnWithLoading loading={register.isPending} type="submit">
          Enviar
        </BtnWithLoading>
      </Form>
      <LinkStyled to={"/auth/logIn"}>Já possui uma conta? Login</LinkStyled>
    </Centered>
  );
};

export default SignUpPage;
