import { Button } from "antd";
import styled from "styled-components";

const Label = styled.label`
color: ${props => props.theme.colors.secondary};
`
const TitleStyled = styled.h1`
    font-family: sans-serif;
    color: ${props => props.theme.colors.primary};
    text-align: center;
`

const SubTitle = styled.h2`
    font-family: sans-serif;
    color: ${props => props.theme.colors.primary};
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export { Label, TitleStyled, SubTitle }