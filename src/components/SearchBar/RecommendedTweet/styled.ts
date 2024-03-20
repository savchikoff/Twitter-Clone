import styled, { DefaultTheme } from 'styled-components';

const s1 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s1;
const s4 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s4;
const s10 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s10;
const s12 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s12;
const s16 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s16;
const s20 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s20;
const graniteGray = ({ theme }: DefaultTheme) =>
	theme.themeType.colors.graniteGray;
const black = ({ theme }: DefaultTheme) => theme.themeType.colors.black;
const blue = ({ theme }: DefaultTheme) => theme.themeType.colors.blue;
const screen768 = ({ theme }: DefaultTheme) =>
	theme.themeType.breakPoints.screen768;
const textColor = ({ theme }: DefaultTheme) => theme.themeType.textColor;

export const TweetContainer = styled.div`
	padding: ${s16};
	border-radius: ${s20};
	border: ${s1} solid ${graniteGray};

	@media (max-width: ${screen768}) {
		padding: ${s10};
		font-size: ${s12};
	}
`;

export const TweetWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${s16};

	@media (max-width: ${screen768}) {
		gap: ${s12};
	}
`;

export const TweetInfo = styled.div`
	display: flex;
	gap: ${s4};
`;

export const UserPersonalData = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${s4};
`;

export const UserInfo = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
`;

export const UserName = styled.div`
	color: ${textColor};
`;

export const UserNickName = styled.div`
	color: ${graniteGray};
`;

export const PublishDate = styled.div`
	cursor: pointer;
	color: ${graniteGray};
	transition: all 0.3s ease;

	&:hover {
		color: ${blue};
	}
`;

export const TweetText = styled.div`
	word-break: break-word;
`;
