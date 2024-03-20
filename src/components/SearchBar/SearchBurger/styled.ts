import styled, { DefaultTheme, keyframes } from 'styled-components';

const s0 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s0;
const s20 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s20;
const s30 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s30;
const bgColor = ({ theme }: DefaultTheme) => theme.themeType.bgColor;
const screen768 = ({ theme }: DefaultTheme) =>
	theme.themeType.breakPoints.screen768;
const screen1024 = ({ theme }: DefaultTheme) =>
	theme.themeType.breakPoints.screen1024;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

export const Container = styled.div`
	padding: ${s30} ${s0};
	height: 100vh;

	@media (max-width: ${screen1024}) {
		border-left: none;
	}
`;

export const Button = styled.button`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background: none;
	border: none;
	cursor: pointer;
	height: ${s20};
`;

export const Menu = styled.div<{ $isOpen: boolean }>`
	position: fixed;
	top: ${s0};
	right: ${({ $isOpen, theme }) =>
		$isOpen ? `${theme.themeType.sizes.s0}` : '-100%'};
	height: 100vh;
	width: 400px;
	background-color: ${bgColor};
	padding: ${s20};
	transition: right 0.3s ease-in-out;
	animation: ${({ $isOpen }) => ($isOpen ? slideIn : slideOut)} 0.3s ease-in-out;
	z-index: 1;

	@media (max-width: ${screen768}) {
		width: 300px;
	}
`;

export const HeaderRow = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export const CloseIcon = styled.img`
	cursor: pointer;
`;

export const ContentContainer = styled.div``;
