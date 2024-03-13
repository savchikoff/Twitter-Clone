import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;    
    width: 100%;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 36px;
    padding: 64px 0;

    @media (max-width: 768px){
        gap: 24px;
    }
`;

export const LogInHeader = styled.h2`
    font-size: 48px;
    font-weight: 900;

    @media (max-width: 768px){
        font-size: 40px;
    }

    @media (max-width: 425px){
        font-size: 32px;
    }
`

export const TwitterLogo = styled.img`
    width: 50px;
    height: 41px;
`;

export const LogInForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const Input = styled.input`
    border: 1px solid #CCCCCC;
    border-radius: 6px;
    padding: 20px;
    font-size: 18px;
    min-width: 450px;
    outline: none;
    ::placeholder{
        color: '#666666';
    }

    @media (max-width: 768px){
        font-size: 16px;
        padding: 16px;
    }

    @media (max-width: 530px){
        font-size: 16px;
        padding: 12px;
        min-width: 200px;
        max-width: 100%;
    }


`;

export const Button = styled.button`
    font-size: 18px;
    height: 56px;
    border: none;
    font-weight: 700;
    outline: none;
    border-radius: 76px;
    background-color: #1DA1F2;
    color: #FFFFFF;
    transition: all 0.3s ease;

    &:hover{
        background-color: #6CC6FD;
    }

    &:disabled{
        background-color: #6CC6FD;
    }

    @media (max-width: 768px){
        font-size: 16px;
        height: 48px;
    }
`

export const ErrorLabel = styled.div`
    color: red;
`