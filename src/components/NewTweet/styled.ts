import styled, { DefaultTheme } from 'styled-components';

const s0 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s0;
const s1 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s1;
const s4 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s4;
const s12 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s12;
const s16 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s16;
const s18 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s18;
const s20 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s20;
const s24 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s24;
const s32 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s32;
const textColor = ({ theme }: DefaultTheme) => theme.themeType.textColor;
const silver = ({ theme }: DefaultTheme) => theme.themeType.colors.silver;
const lightBlue = ({ theme }: DefaultTheme) => theme.themeType.colors.lightBlue;
const white = ({ theme }: DefaultTheme) => theme.themeType.colors.white;
const blueHover = ({ theme }: DefaultTheme) => theme.themeType.colors.blueHover;
const oceanBlue = ({ theme }: DefaultTheme) => theme.themeType.colors.oceanBlue;
const black = ({ theme }: DefaultTheme) => theme.themeType.colors.black;
const bold = ({ theme }: DefaultTheme) => theme.themeType.fontWeights.bold;
const screen1440 = ({ theme }: DefaultTheme) =>
	theme.themeType.breakPoints.screen1440;
const screen768 = ({ theme }: DefaultTheme) =>
	theme.themeType.breakPoints.screen768;
const screen425 = ({ theme }: DefaultTheme) =>
	theme.themeType.breakPoints.screen425;

export const TweetContainer = styled.div`
	padding: ${s24} ${s16};
	border-top: ${s1} solid ${silver};
	border-bottom: ${s1} solid ${silver};

	@media (max-width: ${screen768}) {
		padding: ${s16} ${s12};
	}
`;

export const TweetWrapper = styled.div`
	display: flex;
	gap: ${s20};
	width: 100%;

	@media (max-width: ${screen768}) {
		gap: ${s12};
	}
`;

export const UserAvatar = styled.img``;

export const TweetContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${s4};
	width: 100%;
`;

export const TweetText = styled.textarea`
	font-family: inherit;
	font-size: ${s16};
	width: 100%;
	resize: none;
	border: none;
	outline: none;
	background: none;
	color: ${textColor};
	&::placeholder {
		font-weight: ${bold};
	}

	@media (max-width: ${screen425}) {
		font-size: ${s12};
	}
`;

export const TweetActionsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const TweetImageButton = styled.input`
	cursor: pointer;
`;

export const TweetImage = styled.img`
	width: ${s24};
	height: ${s24};

	@media (max-width: ${screen425}) {
		width: ${s16};
		height: ${s16};
	}
`;

export const TweetAddButton = styled.button`
	font-size: ${s18};
	font-weight: ${bold};
	background-color: ${lightBlue};
	padding: ${s16} ${s32};
	color: ${white};
	border: none;
	outline: none;
	border-radius: 50px;
	transition: all 0.3s ease;
	cursor: pointer;

	&:hover {
		background-color: ${blueHover};
	}

	&:disabled {
		background-color: ${oceanBlue};
		cursor: default;
	}

	@media (max-width: ${screen425}) {
		font-size: ${s12};
		padding: ${s12} ${s24};
	}
`;
export const FileInputWrapper = styled.div`
	position: relative;
	display: flex;
`;

export const FileInputLabel = styled.label`
	display: flex;
	align-items: center;
	padding: ${s12} ${s16};
	color: ${textColor};
	cursor: pointer;
`;

export const FileInput = styled.input`
	visibility: hidden;
	width: ${s0};
	height: ${s0};
`;

export const InputIcon = styled.img`
	width: ${s20};
	height: ${s20};
	margin-right: 10px;
`;
