import { FC, ReactNode } from "react";
import { ButtonComponent, ButtonWrapper, ButtonLabel, ButtonIcon } from "./styled";
import { Link } from "react-router-dom";

export interface ButtonProps {
    iconSrc?: string;
    children: ReactNode | string;
    onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ iconSrc, children, onClick }) => {
    return (
        <ButtonComponent onClick={onClick}>
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