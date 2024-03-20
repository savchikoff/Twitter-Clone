import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { INavItemProps } from './interfaces';
import { IconWrapper, NavItemText, NavItemWrapper } from './styled';

const NavItem: FC<INavItemProps> = ({
	isActive,
	Icon,
	label,
	to,
	isPrimary,
}) => {
	const navigate = useNavigate();

	const handleNavItemClick = () => {
		navigate(to);
	};

	return (
		<NavItemWrapper onClick={handleNavItemClick}>
			<IconWrapper $isActive={!!isActive}>
				<Icon />
			</IconWrapper>
			<NavItemText $isActive={!!isActive} $isPrimary={!!isPrimary}>
				{label}
			</NavItemText>
		</NavItemWrapper>
	);
};

export default NavItem;
