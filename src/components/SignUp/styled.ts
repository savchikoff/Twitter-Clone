import styled, { DefaultTheme } from 'styled-components';

const s1 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s1;
const s0 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s0;
const s16 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s16;
const s18 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s18;
const s20 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s20;
const s24 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s24;
const s30 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s30;
const s40 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s40;
const s56 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s56;
const s64 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s64;
const silver = ({ theme }: DefaultTheme) => theme.themeType.colors.silver;
const blue = ({ theme }: DefaultTheme) => theme.themeType.colors.blue;
const oceanBlue = ({ theme }: DefaultTheme) => theme.themeType.colors.oceanBlue;
const white = ({ theme }: DefaultTheme) => theme.themeType.colors.white;
const red = ({ theme }: DefaultTheme) => theme.themeType.colors.red;
const graniteGray = ({ theme }: DefaultTheme) =>
	theme.themeType.colors.graniteGray;
const bold = ({ theme }: DefaultTheme) => theme.themeType.fontWeights.bold;
const screen768 = ({ theme }: DefaultTheme) =>
	theme.themeType.breakPoints.screen768;

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100vh;
	padding: ${s40} ${s0};
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: ${s40};
`;

export const InputsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${s40};
	margin-bottom: ${s16};

	@media (max-width: ${screen768}) {
		gap: ${s24};
	}
`;

export const TwitterLogoWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

export const TwitterLogo = styled.img`
	width: ${s40};
	height: 33px;
`;

export const SignUpHeader = styled.h4`
	font-size: ${s30};
`;

export const SignUpForm = styled.form`
	display: flex;
	flex-direction: column;
`;

export const SignUpFields = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${s24};

	@media (max-width: ${screen768}) {
		max-width: 100%;
	}
`;

export const Input = styled.input`
	border: ${s1} solid ${silver};
	border-radius: 6px;
	padding: ${s20};
	font-size: ${s18};
	min-width: 670px;
	outline: none;
	::placeholder {
		color: ${graniteGray};
	}

	@media (max-width: ${screen768}) {
		font-size: ${s16};
		padding: ${s16};
		min-width: 200px;
	}
`;

export const DateOfBirthWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${s16};
	margin-bottom: ${s40};
`;

export const DateOfBirthHeader = styled.h6`
	font-size: ${s18};
`;

export const DateOfBirthSelects = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr 1fr;
	gap: ${s20};
`;

export const Button = styled.button`
	font-size: ${s18};
	height: ${s64};
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
		height: ${s56};
	}
`;

export const Error = styled.div`
	color: ${red};
`;
