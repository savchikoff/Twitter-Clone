import { Route, Routes } from "react-router-dom";

import ErrorPage from "@/pages/ErrorPage";
import FeedPage from "@/pages/FeedPage";
import SignInPage from "@/pages/SignIn";
import SignUpPage from "@/pages/SignUpPage";
import TweetPage from "@/pages/TweetPage";
import WelcomePage from "@/pages/WelcomePage";
import { TweetsProvider } from "@/providers/TweetsProvider";
import { CurrentUserProvider } from "@/providers/UserProvider";

import Home from "../Home";
import Profile from "../Profile";

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
