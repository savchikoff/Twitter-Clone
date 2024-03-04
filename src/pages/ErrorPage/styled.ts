import styled from "styled-components";

export const ErrorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`

export const ErrorWrapper = styled.div`
    display: flex;
    gap: 16px;
    flex-direction: column;
    align-items: center;
`

export const ErrorHeader = styled.h1`
    font-size: 160px;
    color: #1DA1F2;
`;

export const ErrorLabel = styled.div`
    font-size: 32px;
    font-weight: 600;
`

export const BackButton = styled.button`
    cursor: pointer;
    height: 60px;
    width: 200px;
    font-size: 18px;
    color: #FFFFFF;
    background-color: #1DA1F2;
    outline: none;
    border: none;
    border-radius: 80px;
    transition: all 0.3s ease;

    &:hover{
        background-color: #A5D9FA;
    }
`