import styled, { DefaultTheme } from "styled-components";

const s1 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s1;
const s10 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s10;
const s16 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s16;
const s20 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s20;
const s24 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s24;
const s28 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s28;
const textColor = ({ theme }: DefaultTheme) => theme.themeType.textColor;
const bgColor = ({ theme }: DefaultTheme) => theme.themeType.bgColor;
const silver = ({ theme }: DefaultTheme) => theme.themeType.colors.silver;
const extraBold = ({ theme }: DefaultTheme) => theme.themeType.fontWeights.extraBold;
const screen768 = ({ theme }: DefaultTheme) => theme.themeType.breakPoints.screen768;

export const UsersContainer = styled.div`
    min-width: 100%;
    padding: ${s20};
    box-sizing: border-box;
    border: ${s1} solid ${silver};
    border-radius: ${s10};
    background-color: ${bgColor};

    @media (max-width: ${screen768}){
        padding: ${s16}
`;

export const UsersHeader = styled.h3`
    font-size: ${s24};
    font-weight: ${extraBold};
    color: ${textColor};

    @media (max-width: ${screen768}){
        font-size: ${s20};
    }
`

export const UsersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${s28};

    @media (max-width: ${screen768}){
        gap: ${s20};
    }
`;