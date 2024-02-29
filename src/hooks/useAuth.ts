import { useAppSelector } from "./redux-hooks";

export function useAuth() {
    const { login, id } = useAppSelector(state => state.user);

    return {
        isAuth: !!login,
        login,
        id
    };
}