import styled from "styled-components";

const MainCategory = styled.main`
    background-color: ${x => x.theme.colors.dark700};
    margin: 4rem auto;
    max-width: 720px;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border-radius: 10px;
`;

export {MainCategory}