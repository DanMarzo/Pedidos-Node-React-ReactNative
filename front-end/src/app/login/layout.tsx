"use client";
import { AuthProvider } from "@/contexts/AuthContext";
import GlobalStyles from "@/styles/GlobalStyles";
import light from "@/styles/light";
import {
  QueryClient,
  QueryClientContext,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <GlobalStyles />
        <ThemeProvider theme={light}>{children}</ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
