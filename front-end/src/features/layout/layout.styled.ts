import { Layout } from "antd";
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
    background-color: ${x => x.theme.colors.dark700};
    color: ${x => x.theme.colors.primary};
    box-shadow: 0 4px 8px -2px rgba(0, 0, 0, 0.5);
`

export { ContentStyled, HeaderStyled }