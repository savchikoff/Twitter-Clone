import { FC, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import twitterLogo from '@/assets/logos/twitter-logo.svg';
import { auth } from '@/config/firebase';
import ErrorLabel from '@/ui/ErrorLabel';
import LinkWrapper from '@/ui/LinkWrapper';
import { useNotification } from '@/providers/NotificationsProvider';

import { IFormInput } from './interfaces';
import {
	Button,
	Container,
	Input,
	LogInForm,
	LogInHeader,
	TwitterLogo,
	Wrapper,
} from './styled';

const LogIn: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<IFormInput>({ mode: 'onBlur' });

	const [error, setError] = useState<string | undefined>('');

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
				<LogInForm onSubmit={handleSubmit(handleLogin)}>
					<Input
						data-cy="login-email"
						{...register('email', {
							required: 'Email field is required',
							pattern: {
								value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
								message: 'Invalid email address',
							},
						})}
						placeholder="Email address"
					/>
					{errors.email && <ErrorLabel label={errors.email.message} />}
					<Input
						data-cy="login-password"
						type="password"
						{...register('password', {
							required: 'You must specify a password',
							minLength: {
								value: 8,
								message: 'Password must be more than 8 characters',
							},
							maxLength: {
								value: 20,
								message: 'Password must be less than 20 characters',
							},
						})}
						placeholder="Password"
					/>
					{errors.password && <ErrorLabel label={errors.password.message} />}
					<Button data-cy="login-btn" type="submit" disabled={!isValid}>
						Log In
					</Button>
				</LogInForm>
				<LinkWrapper>
					<Link to="/register">Sign up to Twitter</Link>
				</LinkWrapper>
			</Wrapper>
		</Container>
	);
};

export default LogIn;
