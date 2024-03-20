import styled, { DefaultTheme, keyframes } from 'styled-components';

const s0 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s0;
const s1 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s1;
const s8 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s8;
const s12 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s12;
const s16 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s16;
const screen425 = ({ theme }: DefaultTheme) =>
	theme.themeType.breakPoints.screen425;


const slideIn = keyframes`
	0%{
		transform: translateX(100%);
	}
	60%{
		transform: translateX(-15%);
	}
	80%{
		transform: translateX(5%);
	}
	100%{
		transform: translateX(0);
	}
`;

export const NotificationWrapper = styled.div<{ $isError: boolean }>`
	background: ${({ $isError, theme }) =>
		$isError
			? `${theme.themeType.colors.lightPink}`
			: `${theme.themeType.colors.lightGreen}`};
	padding: ${s16};
	min-width: 250px;
	border-radius: ${s8};
	z-index: 300;
	border: ${s1} solid
		${({ $isError, theme }) =>
		$isError
			? `${theme.themeType.colors.begonia}`
			: `${theme.themeType.colors.green}`};

	@media (max-width: ${screen425}) {
		padding: ${s12};
	}

	animation-name: ${slideIn};
	animation-duration: 0.35s;
`;

export const NotificationTitle = styled.h3<{ $isError: boolean }>`
	color: ${({ $isError, theme }) =>
		$isError
			? `${theme.themeType.colors.coralRed}`
			: `${theme.themeType.colors.darkGreen}`};
	margin: ${s0};
`;

export const NotificationContent = styled.p<{ $isError: boolean }>`
	color: ${({ $isError, theme }) =>
		$isError
			? `${theme.themeType.colors.sunsetOrange}`
			: `${theme.themeType.colors.seaGreen}`};
	margin: ${s0};
	font-size: ${s16};

	@media (max-width: ${screen425}) {
		font-size: ${s12};
	}
`;
