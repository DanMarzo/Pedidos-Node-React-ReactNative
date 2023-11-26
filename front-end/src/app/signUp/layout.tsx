"use client";
import { AuthProvider } from "@/contexts/AuthContext";
import GlobalStyles from "@/styles/GlobalStyles";
import light from "@/styles/light";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <GlobalStyles />
        <ToastContainer />
        <ThemeProvider theme={light}>{children}</ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
