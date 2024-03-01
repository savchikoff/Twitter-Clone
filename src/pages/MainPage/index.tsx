import { Navigate, useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useAppDispatch } from "@/hooks/redux-hooks";
import { logOut, auth } from "@/firebase";
import { removeUser } from '../../store/slices/userSlice'
import { useEffect } from "react";

const MainPage = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut();
    }

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/login");
        if (user) return navigate("/feed");
    }, [user, loading]);

    return (
        <div>
            <h1>Welcome</h1>
            <button onClick={handleLogOut}>Logout</button>
        </div>
    );
}

export default MainPage;