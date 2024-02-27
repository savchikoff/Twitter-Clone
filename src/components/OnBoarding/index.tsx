import { Container, MainWrapper, TwitterLogo, TwitterImage, SignUpContent, SignUpHeaders, SignUpMainHeader, SignUpHeader, ButtonsWrapper, AdditionalContent, PrivacyPolicyContent, LogInText, Link, FooterLinksWrapper, FooterLink } from "./styled";
import twitterBg from "@assets/twitter-background.jpg";
import google from "@assets/google.png";
import { FooterLinks } from "@constants/FooterLinks";
import twitterLogo from "@assets/twitter-logo.svg";
import Button from "../Button";

function OnBoarding() {
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
                        <Button label="Sign Up with Google" iconSrc={google} />
                        <Button label="Sign Up with Email" />
                    </ButtonsWrapper>
                    <AdditionalContent>
                        <PrivacyPolicyContent>
                            By singing up you agree to the <Link href="#">Terms of Service</Link> and <Link href="#">Privacy Policy</Link>, including <Link href="#">Cookie Use</Link>.
                        </PrivacyPolicyContent>
                        <LogInText>Already have an account? <Link href="#">Log in</Link></LogInText>
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