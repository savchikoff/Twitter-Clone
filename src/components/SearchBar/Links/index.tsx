import { FC } from 'react';
import { Link } from 'react-router-dom';

import { FooterLinks } from '@/constants/footerLinks';

import { LinksWrapper } from './styled';

const Links: FC = () => {
	return (
		<LinksWrapper>
			{FooterLinks.map(({ name, link }, index) => {
				if (index < 6) {
					return (
						<Link key={name} to={link}>
							{name}
						</Link>
					);
				}
				return null;
			})}
			<Link to="/">More</Link>
		</LinksWrapper>
	);
};

export default Links;
