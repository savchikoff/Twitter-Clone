import styled, { createGlobalStyle,DefaultTheme } from 'styled-components';

const s0 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s0;
const s2 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s2;
const s8 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s8;
const s12 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s12;
const s24 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s24;
const s32 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s32;
const lightGray = ({ theme }: DefaultTheme) => theme.themeType.colors.lightGray;
const white = ({ theme }: DefaultTheme) => theme.themeType.colors.white;

export const Background = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: ${s0};
	left: ${s0};
	z-index: 50;
`;

export const CloseIcon = styled.img`
	height: ${s24};
`

export const Wrapper = styled.div`
	background-color: ${white};
	border: ${s2} solid ${lightGray};
	width: 500px;
	padding: ${s24};
	border-radius: ${s8};
	max-width: 90%;
	max-height: 90%;
	position: relative;
`;

export const HeaderRow = styled.div`
	cursor: pointer;
	position: absolute;
	top: ${s12};
	right: ${s12};
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: ${s32};
`;

export const ScrollDisabler = createGlobalStyle`
  body {
    overflow-y: hidden;
  }
`;