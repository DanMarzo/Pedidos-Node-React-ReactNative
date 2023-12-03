import { Button, Layout } from "antd";
import { Link, Outlet } from "react-router-dom";
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
const LayoutApp: React.FC = () => {
  return (
    <Layout>
      <HeaderStyled>
        <LinkImage to={"/home"}>
          <img src={Logo} height={40} />
        </LinkImage>
        <Nav>
          <LinkStyled to={"/categorias"}>Categorias</LinkStyled>
          <LinkStyled to={"/cardapio"}>Cardápio</LinkStyled>
          <ButtonLogout>
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
