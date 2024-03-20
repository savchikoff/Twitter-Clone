import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '@/config/firebase';
import { TweetsProvider } from '@/providers/TweetsProvider';
import { CurrentUserProvider } from '@/providers/UserProvider';
import { NotificationProvider } from '@/providers/NotificationsProvider';
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
