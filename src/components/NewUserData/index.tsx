import { FC, useEffect, useState } from 'react';
import {
	EmailAuthProvider,
	reauthenticateWithCredential,
	updateEmail,
	updatePassword,
	verifyBeforeUpdateEmail,
} from 'firebase/auth';
import {
	collection,
	getDocs,
	query,
	updateDoc,
	where,
} from 'firebase/firestore';
import { useForm } from 'react-hook-form';

import { auth, db } from '@/config/firebase';
import { logOut } from '@/utils/logOut';
import { useCurrentUser } from '@/providers/UserProvider';
import ErrorLabel from '@/ui/ErrorLabel';
import { useNotification } from '@/providers/NotificationsProvider';

import { ChangeFormInputs } from './interfaces';
import { Input, NewDataForm, SubmitButton } from './styled';

const NewUserData: FC = () => {
	const { uid, email } = useCurrentUser();
	const notification = useNotification();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ChangeFormInputs>({ mode: 'onBlur' });

	const handleChangeData = async (data: ChangeFormInputs) => {
		try {
			const userQuery = query(collection(db, 'Users'), where('uid', '==', uid));
			const userSnapshot = await getDocs(userQuery);
			const tweetsQuery = query(
				collection(db, 'Tweets'),
				where('email', '==', email)
			);
			const tweetsSnapshot = await getDocs(tweetsQuery);

			if (userSnapshot.empty) {
				console.log('No matching documents.');
				return;
			}

			const userDocRef = userSnapshot.docs[0].ref;

			const fieldsToUpdateAtUsers: (keyof ChangeFormInputs)[] = [
				'name',
				'phone',
				'email',
				'password',
				'newPassword',
			];

			const fieldsToUpdateAtTweets: (keyof ChangeFormInputs)[] = [
				'email',
				'name',
			];

			const updatedDataForUsers: Partial<ChangeFormInputs> = {};
			const updatedDataForTweets: Partial<ChangeFormInputs> = {};

			fieldsToUpdateAtUsers.forEach((field) => {
				if (data[field] && field !== 'password' && field !== 'newPassword') {
					updatedDataForUsers[field] = data[field];
				}
			});

			fieldsToUpdateAtTweets.forEach((field) => {
				if (data[field]) {
					updatedDataForTweets[field] = data[field];
				}
			});

			await tweetsSnapshot.forEach((doc) => {
				updateDoc(doc.ref, { ...doc.data(), ...updatedDataForTweets });
			});

			await updateDoc(userDocRef, updatedDataForUsers);
			const user = auth.currentUser;
			user?.reload();

			console.log(data.name);

			if (user && updatedDataForUsers.email) {
				const credential = EmailAuthProvider.credential(
					user.email!,
					data.password
				);
				await reauthenticateWithCredential(user, credential);
				if (user.email !== updatedDataForUsers.email) {
					await verifyBeforeUpdateEmail(user, updatedDataForUsers.email);
				}
				if (user.email !== updatedDataForUsers.email) {
					await updateEmail(user, updatedDataForUsers.email);
				}
				setTimeout(() => {
					logOut();
				}, 2000);
			}

			if (user && data.password && data.newPassword) {
				const credential = EmailAuthProvider.credential(
					user.email!,
					data.password
				);
				await reauthenticateWithCredential(user, credential);
				await updatePassword(user, data.newPassword);
				setTimeout(() => {
					logOut();
				}, 2000);
			}

			if (!fieldsToUpdateAtUsers || (data.password && data.newPassword)) {
				notification?.open("User data has changed", false);
			}
		} catch (error) {
			if (error instanceof Error) {
				console.error(error.message);
				notification?.open("Error while updating user data", true);
			}
		} finally {
			reset();
		}
	};

	return (
		<NewDataForm onSubmit={handleSubmit(handleChangeData)}>
			<Input
				placeholder="New name"
				{...register('name', {
					minLength: {
						value: 2,
						message: 'Name must be more than 2 characters',
					},
				})}
			/>
			{errors.name && <ErrorLabel label={errors.name.message} />}
			<Input
				placeholder="New phone"
				{...register('phone', {
					pattern: {
						value: /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/,
						message: 'Invalid phone number (example: +375333435866)',
					},
				})}
			/>
			{errors.phone && <ErrorLabel label={errors.phone.message} />}
			<Input
				placeholder="New email (needs current password)"
				{...register('email', {
					pattern: {
						value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
						message: 'Invalid email address',
					},
				})}
			/>
			{errors.email && <ErrorLabel label={errors.email.message} />}
			<Input
				type="password"
				placeholder="Current password"
				{...register('password', {
					minLength: {
						value: 8,
						message: 'Password must be more than 8 characters',
					},
					maxLength: {
						value: 20,
						message: 'Password must be less than 20 characters',
					},
				})}
			/>
			{errors.password && <ErrorLabel label={errors.password.message} />}
			<Input
				type="password"
				placeholder="New password (needs current password)"
				{...register('newPassword', {
					pattern: {
						value:
							/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,
						message:
							'New password should contain at least one number, one special character and one upper letter',
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
			/>
			{errors.newPassword && <ErrorLabel label={errors.newPassword.message} />}
			<SubmitButton type="submit">Change</SubmitButton>
		</NewDataForm>
	);
};

export default NewUserData;
