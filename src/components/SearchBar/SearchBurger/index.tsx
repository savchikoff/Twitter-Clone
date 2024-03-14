import { useState, useRef, useEffect, FC } from 'react';
import { Container, Button, Menu, CloseIcon, HeaderRow, ContentContainer } from './styled';
import closeIcon from '@/assets/close.svg';
import SearchIcon from "@/assets/search.svg?react";
import { ISearchBurgerProps } from './interfaces';

const SearchBurger: FC<ISearchBurgerProps> = ({ children }) => {
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
                <Button onClick={toggleMenu}>
                    <SearchIcon />
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

export default SearchBurger;