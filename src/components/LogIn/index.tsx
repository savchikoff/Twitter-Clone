import { signInWithEmailAndPassword } from "firebase/auth";
import { FC, useCallback, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import twitterLogo from "@/assets/twitter-logo.svg"
import { auth } from "@/firebase";
import ErrorLabel from "@/ui/ErrorLabel";
import LinkWrapper from "@/ui/LinkWrapper";
import Notification from "@/ui/Notification";

import { IFormInput } from "./interfaces";
import { Button, Container, Input, LogInForm, LogInHeader, TwitterLogo, Wrapper } from "./styled";


const LogIn: FC = () => {

    const { register, handleSubmit, formState: { errors, isValid } } = useForm<IFormInput>({ mode: "onBlur" });

    const [isNotificationActive, setNotificationActive] = useState(false);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState<string | undefined>("");

    const navigate = useNavigate();

    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        if (loading) {
            return;
        }
        if (user) navigate("/");
    }, [user, loading, navigate]);

    useEffect(() => {
        if (errors?.email?.message ||
            errors?.password?.message) {
            setIsError(true);
            setError(errors?.email?.message || errors?.password?.message);
        } else {
            setIsError(false);
            setError("");
        }
    }, [errors.email, errors.password]);

    const handleLogin = ({ email, password }: IFormInput) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate('/');
            })
            .catch((e: Error) => {
                setIsError(true);
                setError(e.message);
                setNotificationActive(true);
            });
    }

    const handleNotificationActive = useCallback(() => {
        setNotificationActive(false);
        setIsError(false);
        setError("");
    }, []);

    return (
        <Container>
            <Wrapper>
                <TwitterLogo src={twitterLogo} />
                <LogInHeader>
                    Log in to Twitter
                </LogInHeader>
                <LogInForm onSubmit={handleSubmit(handleLogin)}>
                    <Input
                        data-cy="login-email"
                        {...register("email", {
                            required: "Email field is required",
                            pattern: {
                                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                message: "Invalid email address"
                            }
                        })}
                        placeholder="Email address"
                    />
                    <Input
                        data-cy="login-password"
                        type="password"
                        {...register("password", {
                            required: "You must specify a password",
                            minLength: {
                                value: 8,
                                message: "Password must be more than 8 characters"
                            },
                            maxLength: {
                                value: 20,
                                message: "Password must be less than 20 characters"
                            },
                        })}
                        placeholder="Password" />
                    {isError && !isNotificationActive && <ErrorLabel label={error} />}
                    <Button data-cy="login-btn" type="submit" disabled={!isValid}>Log In</Button>
                </LogInForm>
                <LinkWrapper>
                    <Link to="/register">Sign up to Twitter</Link>
                </LinkWrapper>
                {isNotificationActive && <Notification
                    isError
                    active={isNotificationActive}
                    handleNotificationActive={handleNotificationActive}
                    label="Error while authenticating"
                    message={error} />}
            </Wrapper>
        </Container>
    )
}

export default LogIn;