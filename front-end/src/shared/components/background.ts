import styled from "styled-components";

const Background = styled.div`
    height:100vh;
    width: 100vw;
    background-color: ${x => x.theme.colors.dark700};
    color: ${x => x.theme.colors.grey100};
`

export {Background}