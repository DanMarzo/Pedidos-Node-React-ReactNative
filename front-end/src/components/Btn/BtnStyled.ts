import { styled } from "styled-components"

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
export{BtnLogin}