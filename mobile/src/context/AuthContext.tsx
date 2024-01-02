import { useMutation } from '@tanstack/react-query';
import { ReactNode, createContext, useState } from 'react';
import { api } from '../services/api';

type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
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
  const { isPending, data, mutateAsync } = useMutation({
    mutationFn: (body: SignInProps) =>
      api.post('/session', body) as Promise<UserProps>,
  });

  const [user] = useState<UserProps>({
    email: '',
    id: '',
    name: '',
    token: '',
  });

  const isAuthenticated = !!user.token;

  const signIn = async ({ email, password }: SignInProps) => {
    console.log('cheguei aaqui');

    const response = await mutateAsync({ email, password });
    console.log(response);
  };

  return (
    // Nessa misera ele procura os valores(values) dentro do escopo antes do return,
    // Ou seja é necessário cuidado com os nomes, Redux é melhor :)
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
