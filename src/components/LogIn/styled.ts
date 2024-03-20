import styled, { DefaultTheme } from 'styled-components';

const s0 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s0;
const s1 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s1;
const s12 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s12;
const s16 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s16;
const s18 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s18;
const s20 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s20;
const s24 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s24;
const s32 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s32;
const s36 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s36;
const s40 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s40;
const s48 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s48;
const s56 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s56;
const s64 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s64;
const silver = ({ theme }: DefaultTheme) => theme.themeType.colors.silver;
const red = ({ theme }: DefaultTheme) => theme.themeType.colors.red;
const graniteGray = ({ theme }: DefaultTheme) =>
	theme.themeType.colors.graniteGray;
const blue = ({ theme }: DefaultTheme) => theme.themeType.colors.blue;
const oceanBlue = ({ theme }: DefaultTheme) => theme.themeType.colors.oceanBlue;
const white = ({ theme }: DefaultTheme) => theme.themeType.colors.white;
const bold = ({ theme }: DefaultTheme) => theme.themeType.fontWeights.bold;
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

export const LogInForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: ${s24};
`;

export const Input = styled.input`
	border: ${s1} solid ${silver};
	border-radius: 6px;
	padding: ${s20};
	font-size: ${s18};
	min-width: 450px;
	outline: none;
	::placeholder {
		color: ${graniteGray};
	}

	@media (max-width: ${screen768}) {
		font-size: ${s16};
		padding: ${s16};
	}

	@media (max-width: 530px) {
		font-size: ${s16};
		padding: ${s12};
		min-width: 200px;
		max-width: 100%;
	}
`;

export const Button = styled.button`
	cursor: pointer;
	font-size: ${s18};
	height: ${s56};
	border: none;
	font-weight: ${bold};
	outline: none;
	border-radius: 76px;
	background-color: ${blue};
	color: ${white};
	transition: all 0.3s ease;

	&:hover {
		background-color: ${oceanBlue};
	}

	&:disabled {
		background-color: ${oceanBlue};
	}

	@media (max-width: ${screen768}) {
		font-size: ${s16};
		height: ${s48};
	}
`;

export const ErrorLabel = styled.div`
	color: ${red};
`;
