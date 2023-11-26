"use client";
import { useMutation } from "@tanstack/react-query";
import { destroyCookie } from "nookies";
import { createContext, ReactNode, useState } from "react";
import Router from "next/router";
import { apiClient } from "@/infrastructure/apiClient";
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

  const isAuthenticated = !!user;
  const loginMutation = useMutation({
    mutationFn: (body: SignInProps) => apiClient.post("/session", body),
    onError(error) {
      console.log(error);
    },
    onSuccess(data) {
      console.log(data);
    },
  });

  async function signIn({ email, password }: SignInProps) {
    loginMutation.mutate({ email, password });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
