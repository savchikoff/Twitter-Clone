import { Route, Routes } from "react-router-dom";
import { CurrentUserProvider } from "@/providers/UserProvider";
import { TweetsProvider } from "@/providers/TweetsProvider";

import FeedPage from "@/pages/FeedPage";
import SignInPage from "@/pages/SignIn";
import SignUpPage from "@/pages/SignUpPage";
import WelcomePage from "@/pages/WelcomePage";
import ErrorPage from "@/pages/ErrorPage";
import Home from "../Home";
import Profile from "../Profile";
import TweetPage from "@/pages/TweetPage";

function App() {
	return (
		<CurrentUserProvider>
			<TweetsProvider>
				<Routes>
					<Route path="/" element={<FeedPage />}>
						<Route index element={<Home />} />
						<Route path="profile" element={<Profile />} />
					</Route>
					<Route path="/onboarding" element={<WelcomePage />} />
					<Route path="/register" element={<SignUpPage />} />
					<Route path="/login" element={<SignInPage />} />
					<Route path="/tweet/:id" element={<TweetPage />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</TweetsProvider>
		</CurrentUserProvider>
	);
}

export default App;
