import styled, { DefaultTheme } from 'styled-components';

const s0 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s0;
const s4 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s4;
const s8 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s8;
const s10 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s10;
const s12 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s12;
const s16 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s16;
const s18 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s18;
const graniteGray = ({ theme }: DefaultTheme) =>
	theme.themeType.colors.graniteGray;
const black = ({ theme }: DefaultTheme) => theme.themeType.colors.black;
const white = ({ theme }: DefaultTheme) => theme.themeType.colors.white;
const semiBold = ({ theme }: DefaultTheme) =>
	theme.themeType.fontWeights.semiBold;
const bold = ({ theme }: DefaultTheme) => theme.themeType.fontWeights.bold;
const screen768 = ({ theme }: DefaultTheme) =>
	theme.themeType.breakPoints.screen768;

export const UsersInfoWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: ${s0};
	width: 100%;
`;

export const UserInfoWrapper = styled.div`
	display: flex;
	gap: ${s12};
`;

export const UserImage = styled.img`
	height: 25px;
`;

export const UserDataWrapper = styled.div`
	display: flex;
	gap: ${s12};
`;

export const UserData = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${s4};
`;

export const UserName = styled.div`
	font-size: ${s18};
	font-weight: ${semiBold};

	@media (max-width: ${screen768}) {
		font-size: ${s16};
	}
`;

export const UserNickName = styled.div`
	font-size: ${s18};
	color: ${graniteGray};
	@media (max-width: ${screen768}) {
		font-size: ${s16};
	}
`;

export const FollowButton = styled.button`
	cursor: pointer;
	font-size: ${s18};
	font-weight: ${bold};
	min-height: 38px;
	padding: ${s10} ${s18};
	background-color: ${black};
	color: ${white};
	box-sizing: border-box;
	border-radius: 50px;
	margin-left: 8px;

	@media (max-width: ${screen768}) {
		font-size: ${s16};
		padding: ${s8} ${s10};
	}
`;
