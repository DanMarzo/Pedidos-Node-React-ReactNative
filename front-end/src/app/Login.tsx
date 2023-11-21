import { Ancora } from "@/components/Ancoras/Ancoras";
import BtnWithLoading from "@/components/Btn/Btn";
import { InputStyled, InputPwd } from "@/components/Inputs/InputComp";
import GlobalStyles from "@/styles/GlobalStyles";
import { Layout, Form } from "antd";
import React, { useContext } from "react";
import { ContentStyled, MainAuth, TitleStyled } from "./page.styled";
const { Item } = Form;
import Logo from "@/../public/logo.svg";
import { AuthContext, SignInProps } from "@/contexts/AuthContext";

import Image from "next/image";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  async function handleSubmit(e: SignInProps) {
    console.log(e);
    signIn(e);
  }
  return (
    <Layout>
      <GlobalStyles />
      <ContentStyled>
        <MainAuth>
          <TitleStyled>
            <Image src={Logo} alt="Imagem Sujeito Pizza" />
          </TitleStyled>
          <Form onFinish={(e) => handleSubmit(e)} layout="horizontal">
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
          <Ancora href={"/signup"}>Não possui uma conta? Cadastre-se</Ancora>
        </MainAuth>
      </ContentStyled>
    </Layout>
  );
};

export default Login;
