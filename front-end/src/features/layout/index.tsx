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
        {/* <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}

        <Outlet />
      </ContentStyled>
    </Layout>
  );
};

export default LayoutApp;
