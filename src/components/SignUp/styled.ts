import styled, { DefaultTheme } from 'styled-components';

const s0 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s0;
const s40 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s40;

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100vh;
	padding: ${s40} ${s0};
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: ${s40};
`;