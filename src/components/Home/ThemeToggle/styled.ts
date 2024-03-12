import styled from 'styled-components';

export const Label = styled.label`
	display: flex;
	align-items: center;
	gap: 12px;
	cursor: pointer;
`;

export const Switch = styled.div`
	position: relative;
	width: 48px;
	height: 19px;
	background: #15202b;
	border-radius: 24px;
	border: 1px solid #FFFFFF;
	padding: 4px;
	transition: 300ms all;

	&:before {
		transition: 300ms all;
		content: '';
		position: absolute;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		top: 50%;
		left: 4px;
		background: #15202b;
		border: 1px solid #FFFFFF;
		transform: translate(0, -50%);
	}
`;

export const Input = styled.input`
	opacity: 0;
	position: absolute;

	&:checked + ${Switch} {
		background: #1D9BF0;

		&:before {
			transform: translate(26px, -50%);
			background: #FFFFFF;
		}
	}
`;