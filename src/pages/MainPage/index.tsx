import { Navigate } from "react-router-dom";
import { getAuth, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";
import { useAuth } from "../../hooks/useAuth";

const MainPage = () => {
    const { isAuth, login } = useAuth();

    return isAuth ? (
        <div>
            <h1>Welcome ${login}</h1>
        </div>
    ) : (
        <Navigate to="/login" />
    )
}

export default MainPage;