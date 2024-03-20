import styled, { DefaultTheme } from 'styled-components';

const blue = ({ theme }: DefaultTheme) => theme.themeType.colors.blue;

export const Link = styled.span`
	color: ${blue};
`;
