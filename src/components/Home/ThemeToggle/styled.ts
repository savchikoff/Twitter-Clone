import styled, { DefaultTheme } from 'styled-components';

const s0 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s0;
const s1 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s1;
const s4 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s4;
const s12 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s12;
const s20 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s20;
const s24 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s24;
const s48 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s48;
const darkBlue = ({ theme }: DefaultTheme) => theme.themeType.colors.darkBlue;
const lightBlue = ({ theme }: DefaultTheme) => theme.themeType.colors.lightBlue;
const white = ({ theme }: DefaultTheme) => theme.themeType.colors.white;

export const Label = styled.label`
	display: flex;
	align-items: center;
	gap: ${s12};
	cursor: pointer;
`;

export const Switch = styled.div`
	position: relative;
	width: ${s48};
	height: 19px;
	background: ${darkBlue};
	border-radius: ${s24};
	border: ${s1} solid ${white};
	padding: ${s4};
	transition: 300ms all;

	&:before {
		transition: 300ms all;
		content: '';
		position: absolute;
		width: ${s20};
		height: ${s20};
		border-radius: 50%;
		top: 50%;
		left: ${s4};
		background: ${darkBlue};
		border: ${s1} solid ${white};
		transform: translate(0, -50%);
	}
`;

export const Input = styled.input`
	opacity: ${s0};
	position: absolute;

	&:checked + ${Switch} {
		background: ${lightBlue};

		&:before {
			transform: translate(26px, -50%);
			background: ${white};
		}
	}
`;
