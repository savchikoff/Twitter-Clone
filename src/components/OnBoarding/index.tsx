import google from "@assets/google.png";
import twitterBg from "@assets/twitter-background.jpg";
import twitterLogo from "@assets/twitter-logo.svg";
import { FooterLinks } from "@constants/FooterLinks";
import { Link, useNavigate } from "react-router-dom";
import { db } from "@/firebase";

import Button from "../Button";
import { setUser } from '../../store/slices/userSlice'
import { useAppDispatch } from "@/hooks/redux-hooks";
import { auth } from "@/firebase";
import { AdditionalContent, ButtonsWrapper, Container, FooterLink, FooterLinksWrapper, LinkStyled, LogInText, MainWrapper, PrivacyPolicyContent, SignUpContent, SignUpHeader, SignUpHeaders, SignUpMainHeader, TwitterImage, TwitterLogo } from "./styled";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

function OnBoarding() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const googleProvider = new GoogleAuthProvider();

    const handleSignUpWithGoogle = async () => {
        try {
            const res = await signInWithPopup(auth, googleProvider);
            const user = res.user;
            const q = query(collection(db, "Users"), where("uid", "==", user.uid));
            const docs = await getDocs(q);
            dispatch(setUser({
                login: user.email,
                id: user.uid
            }));
            navigate('/feed');
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
                    <ButtonsWrapper>
                        <Button iconSrc={google} onClick={handleSignUpWithGoogle}>Sign Up with Google</Button>
                        <Button onClick={handleSignUpEmail}>Sign Up With Email</Button>
                    </ButtonsWrapper>
                    <AdditionalContent>
                        <PrivacyPolicyContent>
                            By singing up you agree to the <LinkStyled>Terms of Service</LinkStyled> and <LinkStyled href="#">Privacy Policy</LinkStyled>, including <LinkStyled href="#">Cookie Use</LinkStyled>.
                        </PrivacyPolicyContent>
                        <LogInText>Already have an account? <LinkStyled><Link to="login">Log in</Link></LinkStyled></LogInText>
                    </AdditionalContent>
                </SignUpContent>
            </MainWrapper>
            <FooterLinksWrapper>
                {FooterLinks.map(({ name, link }) => (
                    <FooterLink key={name} href={link}>{name}</FooterLink>
                ))}
            </FooterLinksWrapper>
        </Container>
    )
}

export default OnBoarding;