import styled, { DefaultTheme } from "styled-components";

const s0 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s0;
const s8 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s8;
const s12 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s12;
const s14 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s14;
const s16 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s16;
const s20 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s20;
const s24 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s24;
const s32 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s32;
const s40 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s40;
const s42 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s42;
const s56 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s56;
const s72 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s72;
const s84 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s84;
const black = ({ theme }: DefaultTheme) => theme.themeType.colors.black;
const screen1440 = ({ theme }: DefaultTheme) => theme.themeType.breakPoints.screen1440;
const screen1024 = ({ theme }: DefaultTheme) => theme.themeType.breakPoints.screen1024;
const screen768 = ({ theme }: DefaultTheme) => theme.themeType.breakPoints.screen768;
const screen425 = ({ theme }: DefaultTheme) => theme.themeType.breakPoints.screen425;
const screen375 = ({ theme }: DefaultTheme) => theme.themeType.breakPoints.screen375;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    @media (max-width: ${screen375}){
        padding: ${s0} ${s16};
    }
`;

export const MainWrapper = styled.div`
    display: flex;
    justify-content: start;
    gap: ${s42};
    height: 95vh;

    @media (max-width: ${screen1024}){
        justify-content: center;
    }
`;

export const TwitterImage = styled.img`
    height: 100%;

    @media (max-width: ${screen1024}){
        display: none;
    }
`;

export const TwitterLogo = styled.img`
    width: 50px;
    height: 41px;
    margin-bottom: ${s56};

    @media (max-width: ${screen1024}){
        margin-bottom: ${s40};  
    }
`;

export const SignUpContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const SignUpHeaders = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${s24};
    margin-bottom: ${s32};
`

export const SignUpMainHeader = styled.h1`
    font-size: ${s84};
    font-weight: ${black};
    @media (max-width: ${screen1440}){
        font-size: ${s72};
    }

    @media (max-width: 1100px){
        font-size: ${s56};
    }

    @media (max-width: ${screen425}){
        font-size: ${s40};
    }
`

export const SignUpHeader = styled.h3`
    font-size: ${s42};
    font-weight: ${black};

    @media(max-width: ${screen768}){
        font-size: ${s24};
    }
`

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${s20};
    margin-bottom: ${s32};

    @media (max-width: ${screen1440}){
        gap: ${s16};
        margin-bottom: ${s24};
    }
`

export const AdditionalContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${s20};
    font-size: ${s14};
    @media (max-width: ${screen425}){
        font-size: ${s12};
    }
`

export const PrivacyPolicyContent = styled.p`   
    text-align: left;
    max-width: 373px;
`

export const LogInText = styled.p`
    text-align: left;
`

export const FooterLinksWrapper = styled.div`
    padding: ${s8};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    height: 5vh;
    gap: ${s16};
`;

export const NavLink = styled.span`
    font-size: ${s14};
    
    @media (max-width: ${screen768}){
        font-size: ${s12};
    }
`