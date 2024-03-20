import styled, { DefaultTheme } from 'styled-components';

const s0 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s0;
const s1 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s1;
const s8 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s8;
const s12 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s12;
const s16 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s16;
const s24 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s24;
const s32 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s32;
const screen425 = ({ theme }: DefaultTheme) =>
	theme.themeType.breakPoints.screen425;

export const NotificationWrapper = styled.div<{ $isError: boolean }>`
	background: ${({ $isError, theme }) =>
		$isError
			? `${theme.themeType.colors.lightPink}`
			: `${theme.themeType.colors.lightGreen}`};
	padding: ${s16};
	min-width: 250px;
	border-radius: ${s8};
	position: fixed;
	z-index: 300;
	top: ${s32};
	right: ${s24};
	border: ${s1} solid
		${({ $isError, theme }) =>
			$isError
				? `${theme.themeType.colors.begonia}`
				: `${theme.themeType.colors.green}`};

	@media (max-width: ${screen425}) {
		padding: ${s12};
		top: ${s24};
		right: ${s16};
	}
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
