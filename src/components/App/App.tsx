import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

import { auth } from '@/config/firebase';
import { NotificationProvider } from '@/providers/NotificationsProvider';
import { TweetsProvider } from '@/providers/TweetsProvider';
import { CurrentUserProvider } from '@/providers/UserProvider';
import Loader from '@/ui/Loader';

import Router from '../Router';

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(
		() =>
			onAuthStateChanged(auth, (user) => {
				setIsAuthenticated(Boolean(user));
				setIsLoading(false);
			}),
		[]
	);

	if (isLoading) {
		return <Loader />;
	}

	return (
		<CurrentUserProvider>
			<TweetsProvider>
				<NotificationProvider>
					<Router />
				</NotificationProvider>
			</TweetsProvider>
		</CurrentUserProvider>
	);
}

export default App;
