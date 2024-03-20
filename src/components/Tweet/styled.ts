import styled, { DefaultTheme } from 'styled-components';

const s1 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s1;
const s4 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s4;
const s8 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s8;
const s10 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s10;
const s12 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s12;
const s14 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s14;
const s16 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s16;
const s18 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s18;
const s20 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s20;
const s24 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s24;
const s32 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s32;
const textColor = ({ theme }: DefaultTheme) => theme.themeType.textColor;
const platinum = ({ theme }: DefaultTheme) => theme.themeType.colors.platinum;
const white = ({ theme }: DefaultTheme) => theme.themeType.colors.white;
const red = ({ theme }: DefaultTheme) => theme.themeType.colors.red;
const hoverRed = ({ theme }: DefaultTheme) => theme.themeType.colors.hoverRed;
const lightBlue = ({ theme }: DefaultTheme) => theme.themeType.colors.lightBlue;
const graniteGray = ({ theme }: DefaultTheme) =>
	theme.themeType.colors.graniteGray;
const bold = ({ theme }: DefaultTheme) => theme.themeType.fontWeights.bold;
const screen768 = ({ theme }: DefaultTheme) =>
	theme.themeType.breakPoints.screen768;

export const TweetContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: ${s12} ${s24};
	border-top: ${s1} solid ${platinum};
	border-bottom: ${s1} solid ${platinum};

	@media (max-width: ${screen768}) {
		padding: ${s8} ${s12};
	}
`;

export const TweetWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	gap: ${s8};
	font-size: ${s18};

	@media (max-width: ${screen768}) {
		font-size: ${s14};
	}
`;

export const UserImage = styled.img`
	@media (max-width: ${screen768}) {
		width: ${s24};
	}
`;

export const TweetContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${s24};
`;

export const TweetContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${s4};
`;

export const UserInfo = styled.div`
	display: flex;
	align-items: center;
	gap: ${s8};
`;

export const TweetImageWrapper = styled.div`
	max-width: 679px;
	max-height: 453px;
	border-radius: ${s20};
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const TweetImage = styled.img`
	object-fit: cover;
	width: 100%;
	height: 100%;
`;

export const UserName = styled.div`
	font-size: ${s20};
	font-weight: ${bold};

	@media (max-width: ${screen768}) {
		font-size: ${s16};
	}
`;

export const UserNickName = styled.div`
	color: ${graniteGray};
`;

export const TweetPostDate = styled(UserNickName)`
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		color: ${lightBlue};
	}
`;

export const TweetText = styled.p`
	white-space: pre-line;
	word-break: break-word;
`;

export const TweetOptionsWrapper = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	cursor: pointer;
	margin-top: ${s10};
	position: relative;

	& > svg > path {
		fill: ${textColor};
	}
`;

export const TweetLike = styled.div`
	display: flex;
	align-items: center;
	gap: ${s8};
`;

export const TweetLikeIcon = styled.img`
	cursor: pointer;
`;

export const TweetLikesCounter = styled.div<{ $isLiked: boolean }>`
	font-size: ${s16};
	color: ${({ $isLiked, theme }) =>
		$isLiked
			? `${theme.themeType.colors.pink}`
			: `${theme.themeType.colors.blackCoral}`};
	font-weight: ${({ $isLiked, theme }) =>
		$isLiked ? `${theme.themeType.fontWeights.bold}` : 'inherit'};
`;

export const DeleteButton = styled.button`
	position: absolute;
	bottom: -${s32};
	left: -${s12};
	background-color: ${red};
	color: ${white};
	padding: 5px ${s10};
	border: none;
	border-radius: 5px;
	cursor: pointer;
	font-size: ${s14};
	margin-left: ${s10};
	z-index: 1;

	&:hover {
		background-color: ${hoverRed};
	}
`;
