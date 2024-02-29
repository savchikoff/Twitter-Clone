import { Container, MainWrapper, TwitterLogo, TwitterImage, SignUpContent, SignUpHeaders, SignUpMainHeader, SignUpHeader, ButtonsWrapper, AdditionalContent, PrivacyPolicyContent, LogInText, LinkStyled, FooterLinksWrapper, FooterLink } from "./styled";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import twitterBg from "@assets/twitter-background.jpg";
import google from "@assets/google.png";
import { FooterLinks } from "@constants/FooterLinks";
import twitterLogo from "@assets/twitter-logo.svg";
import Button from "../Button";

function OnBoarding() {
    const navigate = useNavigate();

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
                        <Button iconSrc={google}>Sign Up with Google</Button>
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
                    <FooterLink href={link}>{name}</FooterLink>
                ))}
            </FooterLinksWrapper>
        </Container>
    )
}

export default OnBoarding;