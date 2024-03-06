import styled, { createGlobalStyle } from 'styled-components';

export const Background = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 50;
`;

export const CloseIcon = styled.img`
	height: 24px;
`

export const Wrapper = styled.div`
	background-color: #FFFFFF;
	border: 2px solid #999999;
	width: 500px;
	padding: 24px;
	border-radius: 8px;
	max-width: 90%;
	max-height: 90%;
	position: relative;
`;

export const HeaderRow = styled.div`
	cursor: pointer;
	position: absolute;
	top: 12px;
	right: 12px;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 32px;
`;

export const ScrollDisabler = createGlobalStyle`
  body {
    overflow-y: hidden;
  }
`;