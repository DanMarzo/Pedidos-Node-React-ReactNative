"use client";
import GlobalStyles from "@/styles/GlobalStyles";
import { Form, Layout } from "antd";
import { ContentStyled, MainAuth, TitleStyled } from "./page.styled";
import { ThemeProvider } from "styled-components";
import light from "@/styles/light";
import Image from "next/image";
import { InputPwd, InputStyled } from "@/components/Inputs/InputComp";
import BtnWithLoading from "@/components/Btn/Btn";
import { Ancora } from "@/components/Ancoras/Ancoras";
import { AuthContext, AuthProvider, SignInProps } from "@/contexts/AuthContext";
import { useContext } from "react";
import Login from "./Login";

export default function Home() {
  return (
    <AuthProvider>
      <ThemeProvider theme={light}>
        <Login />
      </ThemeProvider>
    </AuthProvider>
  );
}
