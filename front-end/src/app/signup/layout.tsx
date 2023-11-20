import StyledComponentsRegistry from "@/lib/AntdRegistry";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Faca seu cadastro agora",
  description: "Projeto criado usando Next, Prisma com PostgreSql",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
