import { useMutation } from '@tanstack/react-query';
import { ReactNode, createContext, useState } from 'react';
import { api } from '../services/api';
import { AxiosResponse } from 'axios';

type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  isPending: boolean;
};

type UserProps = {
  id: string;
  name: string;
  email: string;
  token: string;
};

type SignInProps = {
  email: string;
  password: string;
};

//Prefiro o REDUX :)

export const AuthContext = createContext({} as AuthContextData);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProps>({
    email: '',
    id: '',
    name: '',
    token: '',
  });

  const { isPending, mutateAsync } = useMutation({
    mutationFn: (body: SignInProps) =>
      api.post('/session', body) as Promise<AxiosResponse>,
  });
  const isAuthenticated = !!user.token;

  const signIn = async ({ email, password }: SignInProps) => {
    const response = await mutateAsync({ email, password });

    if (response.data) {
      setUser(response.data);
    }
  };

  return (
    // Nessa misera ele procura os valores(values) dentro do escopo antes do return,
    // Ou seja é necessário cuidado com os nomes, Redux é melhor :)
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, isPending }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
