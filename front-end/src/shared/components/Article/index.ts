import styled from "styled-components";


const Article = styled.article`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Section = styled.section`
    padding: 7px;
    background-color: ${x => x.theme.colors.dark900};
    border-radius: .3rem;
    border-left: 7px solid ${x => x.theme.colors.green900};
    cursor: pointer;
`;

export { Section, Article }