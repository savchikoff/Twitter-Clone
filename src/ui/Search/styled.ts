import styled from "styled-components";

export const SearchContainer = styled.div`
    min-width: 200px;
    height: 55px;
    border-radius: 32px;
    background-color: #EFF3F4;
    padding: 15px 20px;
    box-sizing: border-box;
    cursor: pointer;
`

export const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const SearchIcon = styled.img`
    width: 24px;
    height: 24px;
`

export const SearchInput = styled.input`
    font-size: 18px;
    outline: none;
    border: none;
    background: none;
    width: 100%;
`