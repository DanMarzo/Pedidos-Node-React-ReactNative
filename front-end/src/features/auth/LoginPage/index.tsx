import { Checkbox, Form } from "antd";
import { Label, TitleStyled } from "../../../shared/components/Typograph";
import Logo from "../../../../public/logo.svg";
import { InputStyled, InputPwd } from "../../../shared/components/Inputs";
import { authWebRoutes } from "../../../routes/webRoutes";
import BtnWithLoading from "../../../shared/components/Buttons";
import { Centered } from "../auth.styled";
import { LinkStyled } from "../../../shared/components/Buttons/Links";
import { useMutation } from "@tanstack/react-query";
import { LoginService } from "./Login.api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { UserProps } from "../auth.schema";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { useDispatch } from "react-redux";
import { authAction } from "../auth.state";
import { useEffect } from "react";
const { Item } = Form;

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logIn = useMutation({
    mutationFn: (body: UserProps) => LoginService(body),
    onSuccess(data) {
      dispatch(authAction.setUserProps(data));
      toast.success("Bem vindo");
      navigate("/home");
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  const handleChange = (e: CheckboxChangeEvent) => {
    if (e.target.checked) {
      sessionStorage.clear();
      localStorage.setItem("lembre", "S");
    } else {
      localStorage.clear();
    }
  };
  useEffect(() => {
    localStorage.clear();
    sessionStorage.clear();
  }, []);

  return (
    <Centered>
      <TitleStyled>
        <img src={Logo} alt="Imagem Sujeito Pizza" />
      </TitleStyled>
      <Form onFinish={(e) => logIn.mutate(e)} layout="horizontal">
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
        <Checkbox onChange={handleChange}>
          <Label>Lembre-se de mim</Label>
        </Checkbox>
        ;
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
