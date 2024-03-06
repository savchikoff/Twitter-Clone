import { Route, Routes } from "react-router-dom";
import { CurrentUserProvider } from "@/providers/UserProvider";

import FeedPage from "@/pages/FeedPage";
import SignInPage from "@/pages/SignIn";
import SignUpPage from "@/pages/SignUpPage";
import WelcomePage from "@/pages/WelcomePage";
import ErrorPage from "@/pages/ErrorPage";
import Home from "../Home";
import Profile from "../Profile";

function App() {
	return (
		<CurrentUserProvider>
			<Routes>
				<Route path="/" element={<FeedPage />}>
					<Route index element={<Home />} />
					<Route path="profile" element={<Profile />} />
				</Route>
				<Route path="/onboarding" element={<WelcomePage />} />
				<Route path="/register" element={<SignUpPage />} />
				<Route path="/login" element={<SignInPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</CurrentUserProvider>
	);
}

export default App;
