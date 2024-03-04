import styled from 'styled-components';

export const Main = styled.div`
	font-family: inherit;
    color: #666666;
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
    padding: 0 8px;
    height: 70px;
	font-weight: 400;
	background: #FFFFFF;
	border: 1px solid #CCCCCC;
	border-radius: 6px;
	position: relative;
	z-index: 2;
`;

export const ArrowIcon = styled.img < { $isOpen: boolean }> `
	transition: transform 0.3s ease;
	transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0)')}
`;

export const DropDownListContainer = styled.div`
	position: absolute;
	z-index: 1;
    width: 100%;
    bottom: 100%;
    margin-bottom: 8px;
`;

export const DropDownList = styled.ul`
    padding: 0;
    background: #FFFFFF;
    border: 1px solid #CCCCCC;
    max-height: 200px;
    overflow-y: auto;
    scrollbar-width: none; /* Для Firefox */
    -ms-overflow-style: none; /* Для IE 11 */
    &::-webkit-scrollbar {
        display: none; /* Для WebKit (Chrome, Safari) */
    }
    box-sizing: border-box;
    border-radius: 6px;
    font-weight: 400;
`;


export const ListItem = styled.li`
	list-style: none;
	padding: 8px;
	&:not(:last-child) {
        border-bottom: 1px solid #CCCCCC;
	}
`;
