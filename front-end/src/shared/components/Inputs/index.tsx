import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { InputProps, PasswordProps } from "antd/es/input";
import { useContext, useState } from "react";
import { ThemeContext } from "styled-components";
const { Password } = Input;

const InputPwd: React.FC<PasswordProps> = ({ ...rest }) => {
  const theme = useContext(ThemeContext);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const estilos: React.CSSProperties = {
    backgroundColor: theme?.colors.dark900,
    color: theme?.colors.primary,
    border: `1px solid ${theme?.colors.dark900}`,
    width: "100%",
  };
  return (
    <Password
      {...rest}
      iconRender={(visible) => (
        <>
          {visible ? (
            <EyeOutlined onClick={() => setPasswordVisible(!passwordVisible)} />
          ) : (
            <EyeInvisibleOutlined
              onClick={() => setPasswordVisible(!passwordVisible)}
            />
          )}
        </>
      )}
      visibilityToggle={{
        visible: passwordVisible,
      }}
      style={estilos}
      styles={{ input: estilos, prefix: { color: "red" } }}
    />
  );
};

const InputStyled: React.FC<InputProps> = ({ ...rest }) => {
  const theme = useContext(ThemeContext);

  const estilos: React.CSSProperties = {
    backgroundColor: theme?.colors.dark900,
    color: theme?.colors.primary,
    border: `1px solid ${theme?.colors.dark900}`,
  };
  return <Input {...rest} style={estilos} styles={{ input: estilos }} />;
};

export { InputPwd, InputStyled };
