import { Layout } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

const { Content, Header } = Layout

const ContentStyled = styled(Content)`
    height:calc(100vh - 50px);
    background-color: ${x => x.theme.colors.dark700};
    color: ${x => x.theme.colors.primary};
`
const HeaderStyled = styled(Header)`
    height:50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${x => x.theme.colors.dark900};
    color: ${x => x.theme.colors.primary};
    box-shadow: 0 4px 8px -2px rgba(0, 0, 0, 0.5);
`
const LinkStyled = styled(Link)`
    color: ${x => x.theme.colors.primary};
    transition: .7s;
    &:hover{
        color: ${x => x.theme.colors.red900};
    }
`;

const LinkImage = styled(Link)`
    display: flex;
`;
const Nav = styled.nav`
    display:flex;
    gap: 5px;
`

export { ContentStyled, HeaderStyled,LinkStyled,LinkImage,Nav }