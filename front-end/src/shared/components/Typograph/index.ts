import styled from "styled-components";

const Label = styled.label`
color: ${props => props.theme.colors.secondary};
`
const TitleStyled = styled.h1`
    color: ${props => props.theme.colors.primary};
    text-align: center;
`
export{Label,TitleStyled}