import { ComponentType, FC } from "react";
import { useNavigate } from "react-router-dom";

import { IconWrapper, NavItemText, NavItemWrapper } from "./styled";

interface INavItemProps {
    Icon: ComponentType;
    label: string;
    to: string;
    isPrimary?: boolean;
    isActive?: boolean;
}

const NavItem: FC<INavItemProps> = ({ isActive, Icon, label, to, isPrimary }) => {
    const navigate = useNavigate();

    const handleNavItemClick = () => {
        navigate(to);
    }

    return (
        <NavItemWrapper onClick={handleNavItemClick}>
            <IconWrapper $isActive={!!isActive}>
                <Icon />
            </IconWrapper>
            <NavItemText $isActive={!!isActive} $isPrimary={!!isPrimary}>{label}</NavItemText>
        </NavItemWrapper>
    )
}

export default NavItem;