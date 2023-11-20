import { Input } from "antd";
import { InputProps, PasswordProps } from "antd/es/input";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
const { Password } = Input;

const InputPwd: React.FC<PasswordProps> = () => {
  const theme = useContext(ThemeContext);

  const estilos: React.CSSProperties = {
    backgroundColor: theme?.colors.dark900,
    color: theme?.colors.primary,
    border: `1px solid ${theme?.colors.dark900}`,
  };
  return <Password style={estilos} styles={{ input: estilos }} />;
};

const InputStyled: React.FC<InputProps> = () => {
  const theme = useContext(ThemeContext);

  const estilos: React.CSSProperties = {
    backgroundColor: theme?.colors.dark900,
    color: theme?.colors.primary,
    border: `1px solid ${theme?.colors.dark900}`,
  };
  return <Input style={estilos} styles={{ input: estilos }} />;
};

export { InputPwd, InputStyled };
