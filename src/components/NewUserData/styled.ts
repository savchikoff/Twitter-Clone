import styled, { DefaultTheme } from "styled-components";

const s1 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s1;
const s16 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s16;
const s18 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s18;
const s32 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s32;
const silver = ({ theme }: DefaultTheme) => theme.themeType.colors.silver;
const graniteGray = ({ theme }: DefaultTheme) => theme.themeType.colors.graniteGray;
const oceanBlue = ({ theme }: DefaultTheme) => theme.themeType.colors.oceanBlue;
const white = ({ theme }: DefaultTheme) => theme.themeType.colors.white;
const blue = ({ theme }: DefaultTheme) => theme.themeType.colors.blue;
const bold = ({ theme }: DefaultTheme) => theme.themeType.fontWeights.bold;

export const NewDataForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: ${s16};
    width: 70%;
`;

export const Input = styled.input`
    border: ${s1} solid ${silver};
    border-radius: 6px;
    padding: ${s16};
    font-size: ${s16};
    outline: none;
    ::placeholder{
        color: ${graniteGray};
    }
`;

export const SubmitButton = styled.button`
    cursor: pointer;
    font-size: ${s18};
    font-weight: ${bold};
    color: ${white};
    background-color: ${blue};
    border-radius: ${s32};
    padding: 15px;
    border: none;
    transition: all 0.3s ease;

    &:hover{
        background-color: ${oceanBlue};
    }
`;