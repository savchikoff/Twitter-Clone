import styled, { DefaultTheme } from 'styled-components';

const s4 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s4;
const s16 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s16;
const s18 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s18;
const s20 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s20;
const s24 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s24;
const s28 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s28;
const s30 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s30;
const s32 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s32;
const s40 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s40;
const s48 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s48;
const s56 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s56;
const white = ({ theme }: DefaultTheme) => theme.themeType.colors.white;
const lightBlue = ({ theme }: DefaultTheme) => theme.themeType.colors.lightBlue;
const ashGrey = ({ theme }: DefaultTheme) => theme.themeType.colors.ashGrey;
const graniteGrey = ({ theme }: DefaultTheme) =>
	theme.themeType.colors.graniteGrey;
const bold = ({ theme }: DefaultTheme) => theme.themeType.fontWeights.bold;
const semiBold = ({ theme }: DefaultTheme) =>
	theme.themeType.fontWeights.semiBold;
const screen768 = ({ theme }: DefaultTheme) =>
	theme.themeType.breakPoints.screen768;

export const SidebarContainer = styled.div`
	margin-top: ${s30};
`;

export const TwitterLogo = styled.img`
	width: ${s40};
	height: 33px;
	margin-bottom: ${s48};
`;

export const SidebarWrapper = styled.div``;

export const NavigationContainer = styled.nav`
	display: flex;
	flex-direction: column;
	gap: ${s32};
	margin-bottom: ${s24};

	@media (max-width: ${screen768}) {
		gap: ${s24};
		margin-bottom: ${s20};
	}
`;

export const TweetButton = styled.button`
	cursor: pointer;
	height: ${s56};
	font-size: ${s18};
	font-weight: ${bold};
	color: ${white};
	min-width: 230px;
	background-color: ${lightBlue};
	outline: none;
	border: none;
	border-radius: ${s28};
	margin-bottom: ${s40};

	@media (max-width: ${screen768}) {
		height: ${s48};
		font-size: ${s16};
		min-width: 156px;
	}
`;

export const LogoutButton = styled.button`
	cursor: pointer;
	height: 55px;
	font-size: ${s18};
	font-weight: ${bold};
	color: ${white};
	min-width: 230px;
	background-color: ${ashGrey};
	outline: none;
	border: none;
	border-radius: ${s28};

	@media (max-width: 768px) {
		height: ${s48};
		font-size: ${s16};
		min-width: 156px;
	}
`;

export const UserWrapper = styled.div`
	display: flex;
	gap: ${s16};
	margin-bottom: ${s16};
`;

export const UserAvatar = styled.img`
	width: 49px;
	height: 54px;

	@media (max-width: ${screen768}) {
		width: 35px;
		height: 40px;
	}
`;

export const UserInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${s4};
`;

export const UserName = styled.div`
	font-weight: ${semiBold};
`;

export const UserNick = styled.div`
	color: ${graniteGrey};
`;
