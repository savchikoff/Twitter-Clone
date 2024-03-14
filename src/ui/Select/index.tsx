import { FC, useEffect, useRef, useState } from 'react';

import arrow from "@/assets/arrow.svg";

import { ISelectProps } from './interfaces';
import {
    ArrowIcon,
    DropDownContainer,
    DropDownHeader,
    DropDownList,
    DropDownListContainer,
    ListItem,
    Main,
} from './styled';


const Select: FC<ISelectProps> = ({ label, options, selectedOption, setSelectedOption, isDisabled, dataCy }) => {
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
            <DropDownContainer ref={selectRef} data-cy={dataCy}>
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
                                    data-cy={option}
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
