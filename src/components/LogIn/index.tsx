import { FC, useCallback, useEffect, useState } from 'react';
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

	useEffect(() => {
		if (errors?.email?.message || errors?.password?.message) {
			setError(errors?.email?.message || errors?.password?.message);
		} else {
			setError('');
		}
	}, [errors.email, errors.password]);

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
					{error && <ErrorLabel label={error} />}
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
