import styled, { DefaultTheme } from 'styled-components';

const s12 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s12;
const s16 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s16;
const s18 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s18;
const s20 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s20;
const s32 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s32;
const s48 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s48;
const flashWhite = ({ theme }: DefaultTheme) =>
	theme.themeType.colors.flashWhite;
const screen768 = ({ theme }: DefaultTheme) =>
	theme.themeType.breakPoints.screen768;

export const SearchContainer = styled.div`
	min-width: 200px;
	height: 56px;
	border-radius: ${s32};
	background-color: ${flashWhite};
	padding: ${s16} ${s20};
	box-sizing: border-box;
	cursor: pointer;

	@media (max-width: ${screen768}) {
		height: ${s48};
		padding: ${s12} ${s16};
	}
`;

export const SearchWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: ${s20};
`;

export const SearchIconWrapper = styled.div`
	display: flex;
	align-items: center;
`;

export const SearchIcon = styled.img`
	width: ${s20};
	height: ${s20};
`;

export const SearchInput = styled.input`
	font-size: ${s18};
	outline: none;
	border: none;
	background: none;
	width: 100%;

	@media (max-width: ${screen768}) {
		font-size: ${s16};
	}
`;
