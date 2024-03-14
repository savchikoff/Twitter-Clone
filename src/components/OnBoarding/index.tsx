import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { FC, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";

import google from "@/assets/google.png";
import twitterBg from "@/assets/twitter-background.jpg";
import twitterLogo from "@/assets/twitter-logo.svg";
import { FooterLinks } from "@/constants/footerLinks";
import { auth, db } from "@/firebase";
import LinkWrapper from "@/ui/LinkWrapper";

import Button from "../Button";
import { AdditionalContent, ButtonsWrapper, Container, FooterLinksWrapper, LogInText, MainWrapper, NavLink, PrivacyPolicyContent, SignUpContent, SignUpHeader, SignUpHeaders, SignUpMainHeader, TwitterImage, TwitterLogo } from "./styled";

const OnBoarding: FC = () => {
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();

    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        if (loading) return;
        if (user) navigate('/');
    }, [user, loading, navigate]);

    const handleSignUpWithGoogle = async () => {
        try {
            const res = await signInWithPopup(auth, googleProvider);
            const { user } = res;
            const q = query(collection(db, "Users"), where("uid", "==", user.uid));
            const docs = await getDocs(q);
            navigate('/');
            if (docs.docs.length === 0) {
                await addDoc(collection(db, "Users"), {
                    uid: user.uid,
                    name: user.displayName,
                    authProvider: "google",
                    email: user.email,
                });
            }
        } catch (err) {
            console.error(err);
        }
    };

    const handleSignUpEmail = () => {
        navigate("/register");
    }

    return (
        <Container>
            <MainWrapper>
                <TwitterImage src={twitterBg} />
                <SignUpContent>
                    <TwitterLogo src={twitterLogo} />
                    <SignUpHeaders>
                        <SignUpMainHeader>Happening now</SignUpMainHeader>
                        <SignUpHeader>Join Twitter today</SignUpHeader>
                    </SignUpHeaders>
                    <ButtonsWrapper data-cy="onboarding-buttons">
                        <Button iconSrc={google} onClick={handleSignUpWithGoogle}>Sign Up with Google</Button>
                        <Button onClick={handleSignUpEmail}>Sign Up With Email</Button>
                    </ButtonsWrapper>
                    <AdditionalContent>
                        <PrivacyPolicyContent>
                            By singing up you agree to the <LinkWrapper><Link to="/">Terms of service</Link></LinkWrapper> and <LinkWrapper><Link to="/">Privacy Policy</Link></LinkWrapper>, including <LinkWrapper><Link to="/">Cookie Use</Link></LinkWrapper>.
                        </PrivacyPolicyContent>
                        <LogInText>Already have an account? <LinkWrapper><Link to="/login">Log in</Link></LinkWrapper></LogInText>
                    </AdditionalContent>
                </SignUpContent>
            </MainWrapper>
            <FooterLinksWrapper>
                {FooterLinks.map(({ name, link }) => (
                    <NavLink key={name}>
                        <Link to={link}>{name}</Link>
                    </NavLink>
                ))}
            </FooterLinksWrapper>
        </Container>
    )
}

export default OnBoarding;