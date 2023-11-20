"use client";
import GlobalStyles from "@/styles/GlobalStyles";
import { Input, Layout } from "antd";
import { ContentStyled, HeaderStyled, TitleStyled } from "./page.styled";
import { ThemeProvider } from "styled-components";
import light from "@/styles/light";
import Image from "next/image";
import Logo from "@/../public/logo.svg";
import { InputPwd, InputStyled } from "@/components/Inputs/InputComp";

export default function Home() {
  return (
    <ThemeProvider theme={light}>
      <Layout>
        <GlobalStyles />
        <HeaderStyled>
          <TitleStyled>Sujeito Pizza</TitleStyled>
        </HeaderStyled>
        <ContentStyled>
          <Image src={Logo} alt="Imagem Sujeito Pizza" />
          <InputStyled styles={{ input: { border: "1px solid blue" } }} />
          <InputPwd />
        </ContentStyled>
      </Layout>
    </ThemeProvider>
  );
}
