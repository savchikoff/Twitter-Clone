import styled, { DefaultTheme } from "styled-components";

const s12 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s12;
const s16 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s16;
const s18 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s18;
const s20 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s20;
const lightBlue = ({ theme }: DefaultTheme) => theme.themeType.colors.lightBlue;
const screen768 = ({ theme }: DefaultTheme) => theme.themeType.breakPoints.screen768;


export const NavItemWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: ${s20};
    cursor: pointer;
    
    @media (max-width: ${screen768}){
        gap: ${s12};
    }

    &:hover {
        & div > svg > g > path {
            fill: ${lightBlue};
        }
        color: ${lightBlue};
      }
`

export const IconWrapper = styled.div<{ $isActive: boolean }>`
    & > svg > g > path {
        fill: ${({ $isActive, theme }) => ($isActive ? `${theme.themeType.colors.lightBlue}` : `${theme.themeType.textColor}`)};
    }
`;

export const NavItemText = styled.div<{ $isPrimary: boolean, $isActive: boolean }>`
    font-size: ${s18};
    font-weight:  ${({ $isPrimary, theme }) => ($isPrimary ? `${theme.themeType.fontWeights.bold}` : `${theme.themeType.fontWeights.semiBold}`)};
    color:  ${({ $isActive, theme }) => ($isActive ? `${theme.themeType.colors.lightBlue}` : 'inherit')};

    @media (max-width: ${screen768}){
        font-size: ${s16};
    }
`