"use client";
import { useMutation } from "@tanstack/react-query";
import { createContext, ReactNode, useState } from "react";

type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credential: SignInProps) => Promise<void>;
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

export const AuthContext = createContext({} as AuthContextData);

type AuthProviderProps = { children: ReactNode };

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>();

  const isAuthenticated = !!user;
  // const loginMutation = useMutation({mutationFn:() => })

  async function signIn() {
    alert("CLICOU");
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
