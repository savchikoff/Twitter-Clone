import { FC, useEffect, useMemo, useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import twitterLogo from '@/assets/logos/twitter-logo.svg';
import { Month } from '@/constants/month';
import { auth, db } from '@/config/firebase';
import ErrorLabel from '@/ui/ErrorLabel';
import LinkWrapper from '@/ui/LinkWrapper';
import { generateYears } from '@/utils/generateYears';
import { getDaysInMonthArray } from '@/utils/getDaysInMonthArray';
import { useNotification } from '@/providers/NotificationsProvider';

import Select from '../../ui/Select';
import { ISignUpFormInput } from './interfaces';
import {
	Button,
	Container,
	DateOfBirthHeader,
	DateOfBirthSelects,
	DateOfBirthWrapper,
	Input,
	InputsWrapper,
	SignUpFields,
	SignUpForm,
	SignUpHeader,
	TwitterLogo,
	TwitterLogoWrapper,
	Wrapper,
} from './styled';

const SignUp: FC = () => {
	const navigate = useNavigate();
	const notification = useNotification();

	const [error, setError] = useState<string | undefined>('');
	const [selectedDay, setSelectedDay] = useState('');
	const [selectedMonth, setSelectedMonth] = useState('');
	const [selectedYear, setSelectedYear] = useState('');
	const [dateOfBirth, setDateOfBirth] = useState('');

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<ISignUpFormInput>({ mode: 'onBlur' });

	useEffect(() => {
		setDateOfBirth(`${selectedDay} ${selectedMonth} ${selectedYear}`);
	}, [selectedMonth, selectedYear, selectedDay]);

	useEffect(() => {
		if (
			errors?.name?.message ||
			errors?.phone?.message ||
			errors?.email?.message ||
			errors?.password?.message
		) {
			setError(
				errors?.name?.message ||
				errors?.phone?.message ||
				errors?.email?.message ||
				errors?.password?.message
			);
		} else {
			setError('');
		}
	}, [errors.email, errors.password, errors.name, errors.phone]);

	const handleSignUp = async ({
		name,
		email,
		phone,
		password,
	}: ISignUpFormInput) => {
		try {
			const credentials = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			await addDoc(collection(db, 'Users'), {
				uid: credentials.user.uid,
				authProvider: 'local',
				name,
				phone,
				email,
				password,
				dateOfBirth,
			});
			notification?.open("You are registered", false);
			navigate('/');
		} catch (e: any) {
			notification?.open(e.message, true);
		}
	};

	const daysInMonth = useMemo(
		() =>
			getDaysInMonthArray(Month.indexOf(selectedMonth), Number(selectedYear)),
		[selectedMonth, selectedYear]
	);
	const years = useMemo(() => generateYears(), []);
	const isDayDisabled = !selectedMonth || !selectedYear;
	const isSubmitButtonDisabled = isDayDisabled || !selectedDay || !isValid;

	return (
		<Container>
			<Wrapper>
				<SignUpForm onSubmit={handleSubmit(handleSignUp)}>
					<InputsWrapper>
						<TwitterLogoWrapper>
							<TwitterLogo src={twitterLogo} />
						</TwitterLogoWrapper>
						<SignUpHeader>Create an account</SignUpHeader>
						<SignUpFields>
							<Input
								data-cy="signup-name"
								{...register('name', {
									required: 'Name field is required',
								})}
								placeholder="Name"
							/>
							<Input
								data-cy="signup-phone"
								{...register('phone', {
									required: 'Phone field is required',
									pattern: {
										value: /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/,
										message: 'Invalid phone number (example: +375333435866)',
									},
								})}
								placeholder="Phone number"
							/>
							<Input
								data-cy="signup-email"
								{...register('email', {
									required: 'Email field is required',
									pattern: {
										value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
										message: 'Invalid email address (example: example@mail.ru)',
									},
								})}
								type="email"
								placeholder="Email"
							/>
							<Input
								data-cy="signup-password"
								type="password"
								{...register('password', {
									required: 'You must specify a password',
									pattern: {
										value:
											/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,
										message:
											'Password should contain at least one number and one    special character',
									},
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
							<LinkWrapper>
								<Link to="/">Use email</Link>
							</LinkWrapper>
						</SignUpFields>
					</InputsWrapper>
					<DateOfBirthWrapper>
						<DateOfBirthHeader>Date of birth</DateOfBirthHeader>
						<DateOfBirthSelects>
							<Select
								dataCy="month-select"
								label="Month"
								options={Month}
								selectedOption={selectedMonth}
								setSelectedOption={setSelectedMonth}
							/>
							<Select
								dataCy="year-select"
								label="Year"
								options={years}
								selectedOption={selectedYear}
								setSelectedOption={setSelectedYear}
							/>
							<Select
								dataCy="day-select"
								label="Day"
								options={daysInMonth}
								selectedOption={selectedDay}
								setSelectedOption={setSelectedDay}
								isDisabled={!selectedMonth || !selectedYear}
							/>
						</DateOfBirthSelects>
						{isDayDisabled && (
							<ErrorLabel label="* While month and year aren't specified you can't choose the day" />
						)}
					</DateOfBirthWrapper>
					<Button
						data-cy="signup-btn"
						type="submit"
						disabled={isSubmitButtonDisabled}
					>
						Sign Up
					</Button>
				</SignUpForm>
			</Wrapper>
		</Container>
	);
};

export default SignUp;
