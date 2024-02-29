import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAppDispatch } from "@/hooks/redux-hooks";
import { setUser } from '../../store/slices/userSlice'
import { Container, TwitterLogo, Wrapper, LogInForm, Input, Button, LogInHeader, SignUpLink } from "./styled";
import twitterLogo from "@assets/twitter-logo.svg"

const LogIn: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (login: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, login, password)
            .then(({ user }) => {
                console.log(user);
                dispatch(setUser({
                    login: user.email,
                    id: user.uid
                }));
                navigate('/feed');
            })
            .catch(console.error);
    }

    return (
        <Container>
            <Wrapper>
                <TwitterLogo src={twitterLogo} />
                <LogInHeader>
                    Log in to Twitter
                </LogInHeader>
                <Input onChange={(e) => setLogin(e.target.value)} placeholder="Phone number or email address" />
                <Input onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <Button onClick={() => handleLogin(login, password)}>Log In</Button>
                <SignUpLink><Link to="/register">Sign up to Twitter</Link></SignUpLink>
            </Wrapper>
        </Container>
    )
}

export default LogIn;