import styled, { DefaultTheme } from "styled-components";

const s16 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s16;
const s18 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s18;
const s20 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s20;
const s32 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s32;
const s80 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s80;
const white = ({ theme }: DefaultTheme) => theme.themeType.colors.white;
const blue = ({ theme }: DefaultTheme) => theme.themeType.colors.blue;
const blueHover = ({ theme }: DefaultTheme) => theme.themeType.colors.blueHover;
const semiBold = ({ theme }: DefaultTheme) => theme.themeType.fontWeights.semiBold;
const screen768 = ({ theme }: DefaultTheme) => theme.themeType.breakPoints.screen768;

export const ErrorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`

export const ErrorWrapper = styled.div`
    display: flex;
    gap: ${s16};
    flex-direction: column;
    align-items: center;
`

export const ErrorHeader = styled.h1`
    font-size: 160px;
    color: ${blue};

    @media (max-width: ${screen768}){
        font-size: ${s80}
    }
`;

export const ErrorLabel = styled.div`
    font-size: ${s32};
    font-weight: ${semiBold};
    @media (max-width: ${screen768}){
        font-size: ${s20};
    }

`

export const BackButton = styled.button`
    cursor: pointer;
    height: 60px;
    width: 200px;
    font-size: ${s18};
    color: ${white};
    background-color: ${blue};
    outline: none;
    border: none;
    border-radius: ${s80};
    transition: all 0.3s ease;

    &:hover{
        background-color: ${blueHover};
    }
`