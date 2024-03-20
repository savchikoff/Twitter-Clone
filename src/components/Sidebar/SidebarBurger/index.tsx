import { FC, useEffect, useRef, useState } from 'react';

import Burger from '@/assets/icons/burger.svg?react';
import closeIcon from '@/assets/icons/close.svg';

import { ISidebarBurgerProps } from './interfaces';
import {
	Button,
	CloseIcon,
	Container,
	ContentContainer,
	HeaderRow,
	Menu,
} from './styled';

const SidebarBurger: FC<ISidebarBurgerProps> = ({ children, dataCy }) => {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	const handleClickOutside = (event: Event) => {
		if (
			isOpen &&
			menuRef.current &&
			!menuRef.current.contains(event.target as Node)
		) {
			closeMenu();
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen, handleClickOutside]);

	return (
		<Container>
			<Button onClick={toggleMenu} data-cy="sidebar-burger">
				<Burger />
			</Button>
			<Menu ref={menuRef} $isOpen={isOpen}>
				<HeaderRow>
					<CloseIcon src={closeIcon} alt="close-icon" onClick={closeMenu} />
				</HeaderRow>
				<ContentContainer>{children}</ContentContainer>
			</Menu>
		</Container>
	);
};

export default SidebarBurger;
