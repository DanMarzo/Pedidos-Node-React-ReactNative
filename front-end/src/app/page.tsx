"use client";
import GlobalStyles from "@/styles/GlobalStyles";
import { Form, Layout } from "antd";
import { ContentStyled, MainAuth, TitleStyled } from "./page.styled";
import { ThemeProvider } from "styled-components";
import light from "@/styles/light";
import Image from "next/image";
import Logo from "@/../public/logo.svg";
import { InputPwd, InputStyled } from "@/components/Inputs/InputComp";
import BtnWithLoading from "@/components/Btn/Btn";
import { Ancora } from "@/components/Ancoras/Ancoras";

const { Item } = Form;
export default function Home() {
  return (
    <ThemeProvider theme={light}>
      <Layout>
        <GlobalStyles />
        {/* <HeaderStyled>
          <TitleStyled>Sujeito Pizza</TitleStyled>
        </HeaderStyled> */}
        <ContentStyled>
          <MainAuth>
            <TitleStyled>
              <Image src={Logo} alt="Imagem Sujeito Pizza" />
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
              <BtnWithLoading loading={true} type="submit">
                Enviar
              </BtnWithLoading>
            </Form>
            <Ancora href={"/signup"}>Não possui uma conta? Cadastre-se</Ancora>
          </MainAuth>
        </ContentStyled>
      </Layout>
    </ThemeProvider>
  );
}
