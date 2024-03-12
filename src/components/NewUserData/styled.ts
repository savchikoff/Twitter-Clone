import styled from "styled-components";

export const NewDataForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 70%;
`;

export const Input = styled.input`
    border: 1px solid #CCCCCC;
    border-radius: 6px;
    padding: 16px;
    font-size: 16px;
    outline: none;
    ::placeholder{
        color: #666666;
    }
`;

export const SubmitButton = styled.button`
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
    color: #FFFFFF;
    background-color: #1DA1F2;
    border-radius: 32px;
    padding: 15px;
    border: none;
    transition: all 0.3s ease;

    &:hover{
        background-color: #6CC6FD;
    }
`;