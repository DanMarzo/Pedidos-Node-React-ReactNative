import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { ContentStyled, HeaderStyled } from "./layout.styled";
import Logo from "../../../public/logo.svg";
const LayoutApp: React.FC = () => {
  return (
    <Layout>
      <HeaderStyled>
        <img src={Logo} height={40} />
      </HeaderStyled>
      <ContentStyled>
        <Outlet />
      </ContentStyled>
    </Layout>
  );
};

export default LayoutApp;
