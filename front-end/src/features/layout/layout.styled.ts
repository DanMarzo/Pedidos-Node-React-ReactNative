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
    font-size: medium;
    &:hover{
        color: ${x => x.theme.colors.red900};
    }
`;

const LinkImage = styled(Link)`
    display: flex;
`;
const Nav = styled.nav`
    display:flex;
    align-items: center;
    gap: 10px;
`


const ButtonLogout = styled.button`
    color: ${x => x.theme.colors.primary};
    background-color: transparent;
    border: none;
    margin-right: .5rem;   
    transition: .7s;
    cursor: pointer;
    &:hover{
        transform: scale(1.2);
    }
`
export { ContentStyled, HeaderStyled, LinkStyled, LinkImage, Nav, ButtonLogout }