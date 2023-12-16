import styled from "styled-components";

const SelectStd = styled.select`
    background-color: ${x => x.theme.colors.dark900};
    width: 100%;
    color:  ${x => x.theme.colors.grey100};
    border-radius: 5px;
    padding: 7px;
    border: none;
`;
const OptionStd = styled.option`
    background-color: ${x => x.theme.colors.dark900};
    color:  ${x => x.theme.colors.grey100};
    padding: 10px;
    border: none;
`;

export {SelectStd,OptionStd}