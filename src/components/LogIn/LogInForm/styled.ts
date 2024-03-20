import styled, { DefaultTheme } from "styled-components";

const s1 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s1;
const s12 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s12;
const s16 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s16;
const s18 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s18;
const s20 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s20;
const s24 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s24;
const s48 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s48;
const s56 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s56;
const blue = ({ theme }: DefaultTheme) => theme.themeType.colors.blue;
const oceanBlue = ({ theme }: DefaultTheme) => theme.themeType.colors.oceanBlue;
const white = ({ theme }: DefaultTheme) => theme.themeType.colors.white;
const bold = ({ theme }: DefaultTheme) => theme.themeType.fontWeights.bold;
const silver = ({ theme }: DefaultTheme) => theme.themeType.colors.silver;
const graniteGray = ({ theme }: DefaultTheme) =>
    theme.themeType.colors.graniteGray;
const screen768 = ({ theme }: DefaultTheme) =>
    theme.themeType.breakPoints.screen768;

export const LogInFormWrapper = styled.form`
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