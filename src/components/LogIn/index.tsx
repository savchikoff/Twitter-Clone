import { signInWithEmailAndPassword } from 'firebase/auth';
import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import twitterLogo from '@/assets/logos/twitter-logo.svg';
import { auth } from '@/config/firebase';
import { useNotification } from '@/providers/NotificationsProvider';
import LinkWrapper from '@/ui/LinkWrapper';

import { IFormInput } from './interfaces';
import LogInForm from './LogInForm';
import {
	Container,
	LogInHeader,
	TwitterLogo,
	Wrapper,
} from './styled';

const LogIn: FC = () => {

	const navigate = useNavigate();
	const notification = useNotification();

	const handleLogin = ({ email, password }: IFormInput) => {
		signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				notification?.open("You are now logged in!", false);
				navigate('/');
			})
			.catch((e: Error) => {
				notification?.open(e.message, true);
			});
	};

	return (
		<Container>
			<Wrapper>
				<TwitterLogo
					src={twitterLogo}
					alt="twitter-logo"
					title="Twitter Logo"
				/>
				<LogInHeader>Log in to Twitter</LogInHeader>
				<LogInForm handleLogin={handleLogin} />
				<LinkWrapper>
					<Link to="/register">Sign up to Twitter</Link>
				</LinkWrapper>
			</Wrapper>
		</Container>
	);
};

export default LogIn;
