import styled, { DefaultTheme } from 'styled-components';

const red = ({ theme }: DefaultTheme) => theme.themeType.colors.red;

export const Error = styled.div`
	color: ${red};
`;
