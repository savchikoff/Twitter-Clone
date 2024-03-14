import styled, { DefaultTheme } from "styled-components";

const s0 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s0;
const s8 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s8;
const s12 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s0;
const s20 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s20;
const s24 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s24;
const s30 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s30;
const bold = ({ theme }: DefaultTheme) => theme.themeType.fontWeights.bold;
const screen425 = ({ theme }: DefaultTheme) => theme.themeType.breakPoints.screen425;

export const BackLinkContainer = styled.div`
    display: inline-block;
    padding: ${s0} ${s24};
    padding-bottom: ${s30};

    @media (max-width: ${screen425}){
        padding: ${s0} ${s12};
        padding-bottom: ${s30};
    }
`;

export const BackLinkWrapper = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: ${s8};
`;

export const BackLinkIcon = styled.img``;

export const BackLinkText = styled.div`
    font-size: ${s24};
    font-weight: ${bold};

    @media (max-width: ${screen425}){
        font-size: ${s20};
    }
`;
