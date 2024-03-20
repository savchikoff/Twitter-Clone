import styled, { DefaultTheme } from 'styled-components';

const s0 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s0;
const s8 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s8;
const s14 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s14;
const s16 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s16;
const screen768 = ({ theme }: DefaultTheme) =>
	theme.themeType.breakPoints.screen768;
const blackCoral = ({ theme }: DefaultTheme) =>
	theme.themeType.colors.blackCoral;

export const LinksWrapper = styled.div`
	color: ${blackCoral};
	display: flex;
	padding: ${s0} ${s8};
	gap: ${s16};
	flex-wrap: wrap;
	justify-content: flex-start;

	@media (max-width: ${screen768}) {
		font-size: ${s14};
	}
`;
