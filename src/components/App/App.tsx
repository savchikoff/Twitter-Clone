import { Route,Routes } from "react-router-dom";

import MainPage from "@/pages/MainPage";
import SignInPage from "@/pages/SignIn";
import SignUpPage from "@/pages/SignUpPage";
import WelcomePage from "@/pages/WelcomePage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<WelcomePage />} />
			<Route path="/register" element={<SignUpPage />} />
			<Route path="/login" element={<SignInPage />} />
			<Route path="/feed" element={<MainPage />} />
		</Routes>
	);
}

export default App;
