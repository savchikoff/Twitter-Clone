import { ReactNode } from 'react';

export interface IModalProps {
	isOpen: boolean;
	close: () => void;
	children: ReactNode;
}
