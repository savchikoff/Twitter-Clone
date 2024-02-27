import { FC } from "react";
import { ButtonComponent, ButtonWrapper, ButtonLabel, ButtonIcon } from "./styled";

export interface ButtonProps {
    iconSrc?: string;
    label: string;
}

const Button: FC<ButtonProps> = ({ iconSrc, label }) => {
    return (
        <ButtonComponent>
            <ButtonWrapper>
                {iconSrc && <ButtonIcon src={iconSrc} />}
                <ButtonLabel>
                    {label}
                </ButtonLabel>
            </ButtonWrapper>
        </ButtonComponent>
    )
}

export default Button;