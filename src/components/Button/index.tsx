import { FC, ReactNode } from "react";

import { ButtonComponent, ButtonIcon, ButtonLabel, ButtonWrapper } from "./styled";
import { IButtonProps } from "./interfaces";

const Button: FC<IButtonProps> = ({ iconSrc, children, onClick, type }) => {
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