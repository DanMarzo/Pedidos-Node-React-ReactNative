import { Layout } from "antd";
import styled from "styled-components";

const {Header,Content} = Layout;

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
`
const TitleStyled = styled.h1`
    color: ${props => props.theme.colors.primary};
`

export{HeaderStyled,ContentStyled,TitleStyled}