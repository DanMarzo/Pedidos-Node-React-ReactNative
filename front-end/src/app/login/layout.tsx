"use client";
import { AuthProvider } from "@/contexts/AuthContext";
import GlobalStyles from "@/styles/GlobalStyles";
import light from "@/styles/light";
import { ThemeProvider } from "styled-components";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <GlobalStyles />
      <ThemeProvider theme={light}>{children}</ThemeProvider>
    </AuthProvider>
  );
}
