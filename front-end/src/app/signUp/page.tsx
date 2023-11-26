"use client";
import { Form, Layout } from "antd";
import { ThemeProvider } from "styled-components";
import light from "@/styles/light";
import Image from "next/image";
import Logo from "@/../public/logo.svg";
import { InputPwd, InputStyled } from "@/components/Inputs/InputComp";
import BtnWithLoading from "@/components/Btn/Btn";
import { Ancora } from "@/components/Ancoras/Ancoras";
import { ContentStyled, MainAuth, TitleStyled } from "../page.styled";
import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@/infrastructure/apiClient";
import { useRouter } from "next/navigation";
import { Label } from "@/components/Typograph";
const { Item } = Form;

export default function Home() {
  const router = useRouter();
  const register = useMutation({
    mutationFn: (body) => apiClient.post("/users", body),
    onSuccess() {
      router.push("/login");
    },
  });
  return (
    <ThemeProvider theme={light}>
      <Layout>
        <ContentStyled>
          <MainAuth>
            <TitleStyled>
              <Image src={Logo} alt="Imagem Sujeito Pizza" />
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
            <Ancora href={"/"}>Já possui uma conta? Login</Ancora>
          </MainAuth>
        </ContentStyled>
      </Layout>
    </ThemeProvider>
  );
}
