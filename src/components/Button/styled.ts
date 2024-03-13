import styled from "styled-components";

export const ButtonComponent = styled.button`
    font-size: 20px;
    font-weight: 500;
    border-radius: 42px;
    border: none;
    height: 64px;
    min-width: 403px;
    background-color: #FFFFFF;
    border: 1px solid #E4EAED;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover{
        background-color: #1DA1F2;
        color: #FFFFFF;
    }

    @media (max-width: 1440px){
        font-size: 18px;
    }

    @media (max-width: 768px){
        font-size: 16px;
        height: 48px;
    }

    @media (max-width: 425px){
        min-width: 200px;
    }
`

export const ButtonWrapper = styled.div`
    display: flex;
    gap: 4px;
    justify-content: center;
    align-items: center;
`
export const ButtonIcon = styled.img`
    width: 32px;
    height: 32px;

    @media (max-width: 1440px){
        width: 24px;
        height: 24px;
    }

    @media (max-width: 768px){
        width: 20px;
        height: 20px;
    }
`

export const ButtonLabel = styled.span`
    line-height: 100%;
`;