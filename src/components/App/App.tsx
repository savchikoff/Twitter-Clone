import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

import { auth } from "@/firebase";
import { TweetsProvider } from "@/providers/TweetsProvider";
import { CurrentUserProvider } from "@/providers/UserProvider";
import Loader from "@/ui/Loader";

import Router from "../Router";


function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(
		() =>
			onAuthStateChanged(auth, (user) => {
				setIsAuthenticated(!!user);
				setIsLoading(false)
			}),
		[],
	);

	if (isLoading) {
		return <Loader />
	}

	return (
		<CurrentUserProvider>
			<TweetsProvider>
				<Router />
			</TweetsProvider>
		</CurrentUserProvider>
	);
}

export default App;
