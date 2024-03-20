import styled, { DefaultTheme } from 'styled-components';

const s30 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s30;
const s32 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s32;

export const SearchBarContainer = styled.div`
	margin-top: ${s30};
	max-width: 373px;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: ${s32};
`;
