import styled from "styled-components";

const Label = styled.label`
color: ${props => props.theme.colors.secondary};
`
const TitleStyled = styled.h1`
    font-family: sans-serif;
    color: ${props => props.theme.colors.primary};
    text-align: center;
`
export{Label,TitleStyled}