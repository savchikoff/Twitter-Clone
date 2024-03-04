import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { NavItemIcon, NavItemWrapper, NavItemText } from "./styled";

interface INavItemProps {
    icon: string;
    label: string;
    to: string;
    isPrimary?: boolean;
}

const NavItem: FC<INavItemProps> = ({ icon, label, to, isPrimary }) => {
    const navigate = useNavigate();

    const handleNavItemClick = () => {
        navigate(to);
    }

    return (
        <NavItemWrapper onClick={handleNavItemClick}>
            <NavItemIcon src={icon} alt={label} />
            <NavItemText $isPrimary={!!isPrimary}>{label}</NavItemText>
        </NavItemWrapper>
    )
}

export default NavItem;