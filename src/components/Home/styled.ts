import styled, { DefaultTheme } from "styled-components";

const s12 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s12;
const s20 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s20;
const s24 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s24;
const s30 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s30;
const screen425 = ({ theme }: DefaultTheme) => theme.themeType.breakPoints.screen425;

export const HomeHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 ${s24};
    padding-bottom: ${s30};

    @media (max-width: ${screen425}){
        padding: 0 ${s12};
        padding-bottom: ${s30};
    }
`;

export const HomeHeader = styled.h1`
    font-size: ${s24};

    @media (max-width: ${screen425}){
        font-size: ${s20};
    }
`