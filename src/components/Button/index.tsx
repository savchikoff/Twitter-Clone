import { FC, memo,ReactNode } from "react";

import { IButtonProps } from "./interfaces";
import { ButtonComponent, ButtonIcon, ButtonLabel, ButtonWrapper } from "./styled";

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

export default memo(Button);