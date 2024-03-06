import arrow from "@assets/arrow.svg";
import { FC, useEffect, useRef,useState } from 'react';

import {
    ArrowIcon,
    DropDownContainer,
    DropDownHeader,
    DropDownList,
    DropDownListContainer,
    ListItem,
    Main,
} from './styled';

export interface SelectProps {
    label: string;
    options: string[];
    selectedOption: string;
    setSelectedOption: (option: string) => void;
    isDisabled?: boolean;
}

const Select: FC<SelectProps> = ({ label, options, selectedOption, setSelectedOption, isDisabled }) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement | null>(null);

    const toggleSelect = () => {
        if (!isDisabled) {
            setIsOpen(!isOpen);
        }
    };

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(event.target as HTMLElement)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <Main>
            <DropDownContainer ref={selectRef}>
                <DropDownHeader onClick={toggleSelect}>
                    {selectedOption || label}
                    <ArrowIcon $isOpen={isOpen} src={arrow} />
                </DropDownHeader>
                {isOpen && (
                    <DropDownListContainer>
                        <DropDownList>
                            {options.map((option) => (
                                <ListItem
                                    key={option}
                                    onClick={() => handleOptionClick(option)}
                                >
                                    {option}
                                </ListItem>
                            ))}
                        </DropDownList>
                    </DropDownListContainer>
                )}
            </DropDownContainer>
        </Main>
    );
};

export default Select;