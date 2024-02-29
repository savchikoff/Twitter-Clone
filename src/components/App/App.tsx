import { Routes, Route } from "react-router-dom";
import WelcomePage from "@/pages/WelcomePage";
import SignInPage from "@/pages/SignIn";
import SignUpPage from "@/pages/SignUpPage";
import MainPage from "@/pages/MainPage";

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
