import { FC } from "react";
import { Container, TwitterLogo, Wrapper, LogInForm, Input, Button, LogInHeader, SignUpLink } from "./styled";
import twitterLogo from "@assets/twitter-logo.svg"

const LogIn: FC = () => {
    return (
        <Container>
            <Wrapper>
                <TwitterLogo src={twitterLogo} />
                <LogInHeader>
                    Log in to Twitter
                </LogInHeader>
                <LogInForm>
                    <Input placeholder="Phone number or email address" />
                    <Input placeholder="Password" />
                    <Button type="submit">Log In</Button>
                </LogInForm>
                <SignUpLink href="#">Sign up to Twitter</SignUpLink>
            </Wrapper>
        </Container>
    )
}

export default LogIn;