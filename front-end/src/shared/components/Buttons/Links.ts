import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkStyled = styled(Link)`
    font-family:sans-serif;
    color: ${x => x.theme.colors.primary};
    margin: 10px 0px;
`;

export{LinkStyled}