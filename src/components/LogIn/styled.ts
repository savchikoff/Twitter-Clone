import styled, { DefaultTheme } from 'styled-components';

const s0 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s0;
const s24 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s24;
const s32 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s32;
const s36 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s36;
const s40 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s40;
const s48 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s48;
const s64 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s64;
const black = ({ theme }: DefaultTheme) => theme.themeType.fontWeights.black;
const screen768 = ({ theme }: DefaultTheme) =>
	theme.themeType.breakPoints.screen768;
const screen425 = ({ theme }: DefaultTheme) =>
	theme.themeType.breakPoints.screen425;

export const Container = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${s36};
	padding: ${s64} ${s0};

	@media (max-width: ${screen768}) {
		gap: ${s24};
	}
`;

export const LogInHeader = styled.h2`
	font-size: ${s48};
	font-weight: ${black};

	@media (max-width: ${screen768}) {
		font-size: ${s40};
	}

	@media (max-width: ${screen425}) {
		font-size: ${s32};
	}
`;

export const TwitterLogo = styled.img`
	width: 50px;
	height: 41px;
`;
