import styled from "styled-components";
import { Background } from "../../shared/components/background";

const BackgroundCentered = styled(Background)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Centered = styled.main`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 400px;
`


export{BackgroundCentered,Centered}