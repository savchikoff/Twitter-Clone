import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

import { ButtonComponent, ButtonIcon, ButtonLabel, ButtonWrapper } from "./styled";

export interface ButtonProps {
    iconSrc?: string;
    type?: "button" | "submit" | "reset" | undefined;
    children: ReactNode | string;
    onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ iconSrc, children, onClick, type }) => {
    return (
        <ButtonComponent onClick={onClick} type={type}>
            <ButtonWrapper>
                {iconSrc && <ButtonIcon src={iconSrc} />}
                <ButtonLabel>
                    {children}
                </ButtonLabel>
            </ButtonWrapper>
        </ButtonComponent>
    )
}

export default Button;