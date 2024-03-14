import { useState, useRef, useEffect, FC } from 'react';
import { Container, Button, Menu, CloseIcon, HeaderRow, ContentContainer } from './styled';
import closeIcon from '@/assets/close.svg';
import Burger from "@/assets/burger.svg?react";
import { ISidebarBurgerProps } from './interfaces';

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
        if (isOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
            closeMenu();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <>
            <Container>
                <Button onClick={toggleMenu} data-cy="sidebar-burger">
                    <Burger />
                </Button>
                <Menu ref={menuRef} $isOpen={isOpen}>
                    <HeaderRow>
                        <CloseIcon src={closeIcon} alt="close-icon" onClick={closeMenu} />
                    </HeaderRow>
                    <ContentContainer>
                        {children}
                    </ContentContainer>
                </Menu>
            </Container>
        </>
    );
};

export default SidebarBurger;