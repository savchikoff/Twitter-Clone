import { useNavigate } from "react-router-dom";
import { ErrorContainer, ErrorWrapper, ErrorHeader, ErrorLabel, BackButton } from "./styled";
import { FC } from "react";

const ErrorPage: FC = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate("/");
    }

    return (
        <ErrorContainer>
            <ErrorWrapper>
                <ErrorHeader>404</ErrorHeader>
                <ErrorLabel>This page wasn't found</ErrorLabel>
                <BackButton onClick={handleBackClick}>Back to main</BackButton>
            </ErrorWrapper>
        </ErrorContainer>
    )
}

export default ErrorPage;