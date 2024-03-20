import styled, { DefaultTheme } from 'styled-components';

const s0 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s0;
const s1 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s1;
const s8 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s8;
const s56 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s56;
const s64 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s64;
const graniteGray = ({ theme }: DefaultTheme) =>
	theme.themeType.colors.graniteGray;
const white = ({ theme }: DefaultTheme) => theme.themeType.colors.white;
const silver = ({ theme }: DefaultTheme) => theme.themeType.colors.silver;
const screen768 = ({ theme }: DefaultTheme) =>
	theme.themeType.breakPoints.screen768;

export const Main = styled.div`
	font-family: inherit;
	color: ${graniteGray};
	width: 100%;
`;

export const DropDownContainer = styled.div`
	position: relative;
	width: 100%;
`;

export const DropDownHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: ${s0} ${s8};
	height: ${s64};
	font-weight: inherit;
	background: ${white};
	border: ${s1} solid ${silver};
	border-radius: 6px;
	position: relative;
	z-index: 2;

	@media (max-width: ${screen768}) {
		height: ${s56};
	}
`;

export const ArrowIcon = styled.img<{ $isOpen: boolean }>`
	transition: transform 0.3s ease;
	transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0)')};
`;

export const DropDownListContainer = styled.div`
	position: absolute;
	z-index: 1;
	width: 100%;
	bottom: 100%;
	margin-bottom: ${s8};
`;

export const DropDownList = styled.ul`
	padding: 0;
	background: ${white};
	border: ${s1} solid ${silver};
	max-height: 200px;
	overflow-y: auto;
	scrollbar-width: none;
	-ms-overflow-style: none;
	&::-webkit-scrollbar {
		display: none;
	}
	box-sizing: border-box;
	border-radius: 6px;
	font-weight: inherit;
`;

export const ListItem = styled.li`
	list-style: none;
	padding: ${s8};
	&:not(:last-child) {
		border-bottom: ${s1} solid ${silver};
	}
`;
