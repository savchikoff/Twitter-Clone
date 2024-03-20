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
import { FC } from 'react';

import { auth, db } from '@/config/firebase';
import { useNotification } from '@/providers/NotificationsProvider';
import { useCurrentUser } from '@/providers/UserProvider';
import { logOut } from '@/utils/logOut';

import { ChangeFormInputs } from './interfaces';
import NewUserDataForm from './NewUserDataForm';

const NewUserData: FC = () => {
	const { uid, email } = useCurrentUser();
	const notification = useNotification();

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
			location.reload();
		}
	};

	return (
		<NewUserDataForm handleChangeData={handleChangeData} />
	);
};

export default NewUserData;
