import { auth } from '@/config/firebase';
import { signOut } from 'firebase/auth';

export const logOut = () => {
	signOut(auth);
};
