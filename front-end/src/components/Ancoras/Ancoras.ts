import Link from "next/link";
import styled from "styled-components";

const Ancora = styled(Link)`
    color: ${props => props.theme.colors.primary};
    text-align: center;
`

export { Ancora }