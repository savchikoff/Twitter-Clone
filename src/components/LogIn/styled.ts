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
`;

export const LogInHeader = styled.h2`
    font-size: 42px;
    font-weight: 900;
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
        color: #666666;
    }
`;

export const SignUpLink = styled.a`
    text-align: right;
    font-size: 18px;
    color: #1DA1F2;
`

export const Button = styled.button`
    font-size: 18px;
    height: 60px;
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
`