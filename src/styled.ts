import styled, { DefaultTheme } from 'styled-components';

const s0 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s0;
const s8 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s8;
const s48 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s48;
const s128 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s128;

export const Container = styled.div`
	margin: ${s0} auto;
	padding: ${s0} 154px;

	@media (max-width: 1440px) {
		padding: ${s0} ${s128};
	}

	@media (max-width: 768px) {
		padding: ${s0} ${s48};
	}

	@media (max-width: 555px) {
		padding: ${s0} ${s8};
	}
`;
