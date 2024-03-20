import styled, { DefaultTheme } from 'styled-components';

const s0 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s0;
const s1 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s1;
const s30 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s30;
const silver = ({ theme }: DefaultTheme) => theme.themeType.colors.silver;
const screen1024 = ({ theme }: DefaultTheme) =>
	theme.themeType.breakPoints.screen1024;

export const SectionContainer = styled.div`
	width: 100%;
	max-width: 700px;
	margin: ${s0} ${s30};
	border-right: ${s1} solid ${silver};
	border-left: ${s1} solid ${silver};

	@media (max-width: ${screen1024}) {
		margin: ${s0};
	}
`;

export const SectionContent = styled.div`
	margin-top: ${s30};
`;
