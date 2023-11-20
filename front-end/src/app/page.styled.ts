import { Button, Layout } from "antd";
import styled from "styled-components";

const { Header, Content } = Layout;

const HeaderStyled = styled(Header)`
    height: ${props => props.theme.sizes.appbar};
    background-color: ${props => props.theme.colors.dark900};
    display: flex;
    padding: 0;
    align-items: center;

`

const ContentStyled = styled(Content)`
    height: ${props => props.theme.sizes.bodyNotAppbar};
    background-color: ${props => props.theme.colors.dark700};
    display: flex;
    align-items: center;
    justify-content: center;
`
const TitleStyled = styled.h1`
    color: ${props => props.theme.colors.primary};
    text-align: center;
`

const MainAuth = styled.main`
    background-color: "transparent";
    width: 50vw;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export { HeaderStyled, ContentStyled, TitleStyled, MainAuth }