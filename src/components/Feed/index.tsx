import { FC, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

import { auth } from "@/firebase";
import { Container } from "@/styled";

import Layout from "../Layout";

const Feed: FC = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) return navigate("/onboarding");
    }, [user]);

    return (
        <Container>
            <Layout />
        </Container>
    );
}

export default Feed;