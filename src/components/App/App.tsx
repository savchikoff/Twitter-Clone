import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { TweetsProvider } from "@/providers/TweetsProvider";
import { CurrentUserProvider } from "@/providers/UserProvider";
import Router from "../Router";

import { auth } from "@/firebase";
import Loader from "@/ui/Loader";


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
