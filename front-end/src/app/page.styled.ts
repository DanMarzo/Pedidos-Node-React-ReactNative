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
    height: ${props => props.theme.sizes.bodtWithAppbar};
    background-color: ${props => props.theme.colors.dark700};
    display: flex;
    align-items: center;
    justify-content: center;
`
const TitleStyled = styled.h1`
    color: ${props => props.theme.colors.primary};
`

const MainAuth = styled.main`
    background-color: "transparent";
    width: 50vw;
    display: flex;
    flex-direction: column;
    gap: 1rem;

`
const BtnLogin = styled.button`
    background-color: ${props => props.theme.colors.red900};
    color: ${props => props.theme.colors.primary};
    width: 100%;
    border-radius: .5rem;
    height: 2rem;
    font-weight: bold;
    font-size: 1rem;
    border: 1px solid ${props => props.theme.colors.dark700};
    &:hover{
        cursor: pointer;
        border: 1px solid ${props => props.theme.colors.primary};
    }
    
`

export { HeaderStyled, ContentStyled, TitleStyled, MainAuth, BtnLogin }