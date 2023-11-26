"use client";
import { useMutation } from "@tanstack/react-query";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { createContext, ReactNode, useState } from "react";
import Router from "next/router";
import { apiClient } from "@/infrastructure/apiClient";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credential: SignInProps) => Promise<void>;
  signOut: () => void;
};

type UserProps = {
  id: string;
  name: string;
  email: string;
};

export type SignInProps = {
  email: string;
  password: string;
};

type UserData = {
  id: string;
  name: string;
  email: string;
  token: string;
};
export function signOut() {
  try {
    destroyCookie(undefined, "@nextauth.token");
    Router.push("/");
  } catch (error) {
    console.log(error);
  }
}

export const AuthContext = createContext({} as AuthContextData);

type AuthProviderProps = { children: ReactNode };

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>();
  const router = useRouter();
  const isAuthenticated = !!user;
  const loginMutation = useMutation({
    mutationFn: (body: SignInProps) => apiClient.post("/session", body),
    onError(error) {
      toast.error(`Erro: ${error}`);

      console.log(error);
    },
    onSuccess(data) {
      const { token, email, id, name } = data.data as UserData;
      setCookie(undefined, "@nextauth.token", token, {
        path: "/",
      });
      setUser({ email, id, name });
      apiClient.defaults.headers["Authorization"] = `Bearer ${token}`;
      toast.success("Seja bem vindo");

      router.push("/dashboard");
    },
  });

  async function signIn({ email, password }: SignInProps) {
    await loginMutation.mutateAsync({ email, password });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
