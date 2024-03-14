import { s } from "node_modules/vite/dist/node/types.d-jgA8ss1A";
import styled, { DefaultTheme } from "styled-components";

const white = ({ theme }: DefaultTheme) => theme.themeType.colors.white;
const brightGray = ({ theme }: DefaultTheme) => theme.themeType.colors.brightGray;
const blue = ({ theme }: DefaultTheme) => theme.themeType.colors.blue;
const s1 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s1;
const s16 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s16;
const s4 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s4;
const s18 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s18;
const s20 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s20;
const s24 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s24;
const s32 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s32;
const s42 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s42;
const s48 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s48;
const s64 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s64;
const screen1440 = ({ theme }: DefaultTheme) => theme.themeType.breakPoints.screen1440;
const screen768 = ({ theme }: DefaultTheme) => theme.themeType.breakPoints.screen768;
const screen425 = ({ theme }: DefaultTheme) => theme.themeType.breakPoints.screen425;

export const ButtonComponent = styled.button`
    font-size: ${s20};
    font-weight: 500;
    border-radius: ${s42};
    border: none;
    height: ${s64};
    min-width: 403px;
    background-color: ${white};
    border: ${s1} solid ${brightGray};
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover{
        background-color: ${blue};
        color: ${white};
    }

    @media (max-width: ${screen1440}){
        font-size: ${s18};
    }

    @media (max-width: ${screen768}){
        font-size: ${s16};
        height: ${s48};
    }

    @media (max-width: ${screen425}){
        min-width: 200px;
    }
`

export const ButtonWrapper = styled.div`
    display: flex;
    gap: ${s4};
    justify-content: center;
    align-items: center;
`
export const ButtonIcon = styled.img`
    width: ${s32};
    height: ${s32};

    @media (max-width: ${screen1440}){
        width: ${s24};
        height: ${s24};
    }

    @media (max-width: ${screen768}){
        width: ${s20};
        height: ${s20};
    }
`

export const ButtonLabel = styled.span`
    line-height: 100%;
`;