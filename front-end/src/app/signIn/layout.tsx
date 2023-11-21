"use client";
import { AuthProvider } from "@/contexts/AuthContext";
import light from "@/styles/light";
import { ThemeProvider } from "styled-components";

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <ThemeProvider theme={light}>{children}</ThemeProvider>
    </AuthProvider>
  );
}
