import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;    
    width: 100%;
    height: 100vh;
    padding: 40px 0;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px;
`;

export const InputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-bottom: 16px;

    @media (max-width: 768px){
        gap: 24px;
    }
`

export const TwitterLogoWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const TwitterLogo = styled.img`
    width: 40px;
    height: 33px;
`

export const SignUpHeader = styled.h4`
    font-size: 30px;
`;

export const SignUpForm = styled.form`
    display: flex;
    flex-direction: column;
`;

export const SignUpFields = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (max-width: 768px){
        max-width: 100%;
    }
`;

export const Input = styled.input`
    border: 1px solid #CCCCCC;
    border-radius: 6px;
    padding: 20px;
    font-size: 18px;
    min-width: 670px;
    outline: none;
    ::placeholder{
        color: #666666;
    }

    @media (max-width: 768px){
        font-size: 16px;
        padding: 16px;
        min-width: 200px;
    }
`;

export const DateOfBirthWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 40px;
`

export const DateOfBirthHeader = styled.h6`
    font-size: 18px;
`

export const DateOfBirthSelects = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 20px;
`

export const Button = styled.button`
    font-size: 18px;
    height: 64px;
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
        height: 56px;
    }
`

export const Error = styled.div`
    color: #FF4141;
`

