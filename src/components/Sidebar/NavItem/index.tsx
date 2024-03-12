import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { NavItemIcon, NavItemText, NavItemWrapper } from "./styled";

interface INavItemProps {
    icon: string;
    label: string;
    to: string;
    isPrimary?: boolean;
    isActive?: boolean;
}

const NavItem: FC<INavItemProps> = ({ isActive, icon, label, to, isPrimary }) => {
    const navigate = useNavigate();

    const handleNavItemClick = () => {
        navigate(to);
    }

    return (
        <NavItemWrapper onClick={handleNavItemClick}>
            <NavItemIcon src={icon} alt={label} />
            <NavItemText $isActive={isActive} $isPrimary={!!isPrimary}>{label}</NavItemText>
        </NavItemWrapper>
    )
}

export default NavItem;