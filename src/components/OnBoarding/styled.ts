import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    @media (max-width: 375px){
        padding: 0 16px;
    }
`;

export const MainWrapper = styled.div`
    display: flex;
    justify-content: start;
    gap: 42px;
    height: 95vh;

    @media (max-width: 1024px){
        justify-content: center;
    }
`;

export const TwitterImage = styled.img`
    height: 100%;

    @media (max-width: 1024px){
        display: none;
    }
`;

export const TwitterLogo = styled.img`
    width: 50px;
    height: 41px;
    margin-bottom: 56px;

    @media (max-width: 1024px){
        margin-bottom: 40px;  
    }
`;

export const SignUpContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const SignUpHeaders = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 32px;
`

export const SignUpMainHeader = styled.h1`
    font-size: 84px;
    font-weight: 900;
    @media (max-width: 1440px){
        font-size: 72px;
    }

    @media (max-width: 1100px){
        font-size: 56px;
    }

    @media (max-width: 425px){
        font-size: 40px;
    }
`

export const SignUpHeader = styled.h3`
    font-si%ze: 42px;
    font-weight: 900;
`

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 32px;

    @media (max-width: 1440px){
        gap: 16px;
        margin-bottom: 24px;
    }
`

export const AdditionalContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 14px;
    @media (max-width: 425px){
        font-size: 12px;
    }
`

export const PrivacyPolicyContent = styled.p`   
    text-align: left;
    max-width: 373px;
`

export const LogInText = styled.p`
    text-align: left;
`

export const FooterLinksWrapper = styled.div`
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    height: 5vh;
    gap: 16px;
`;

export const NavLink = styled.span`
    font-size: 14px;
    
    @media (max-width: 768px){
        font-size: 12px;
    }
`