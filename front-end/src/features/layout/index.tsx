import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import {
  ButtonLogout,
  ContentStyled,
  HeaderStyled,
  LinkImage,
  LinkStyled,
  Nav,
} from "./layout.styled";
import Logo from "../../../public/logo.svg";
import { LogoutOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { userProps } from "../auth/auth.selector";
const LayoutApp: React.FC = () => {
  const user = useSelector(userProps);
  const signOut = () => {
    localStorage.clear();
    sessionStorage.clear();
    location.href = "/";
  };
  return (
    <Layout>
      <HeaderStyled>
        <LinkImage to={"/home"}>
          <img src={Logo} height={40} />
        </LinkImage>
        <h2>{user?.name}</h2>
        <Nav>
          <LinkStyled to={"/categorias"}>Categorias</LinkStyled>
          <LinkStyled to={"/cardapio"}>Cardápio</LinkStyled>
          <ButtonLogout onClick={signOut}>
            <LogoutOutlined />
          </ButtonLogout>
        </Nav>
      </HeaderStyled>
      <ContentStyled>
        <Outlet />
      </ContentStyled>
    </Layout>
  );
};

export default LayoutApp;
