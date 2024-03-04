import { useNavigate } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase";
import { useEffect } from "react";
import { Container } from "@/styled";
import Layout from "../Layout";

const Feed = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/onboarding");
    }, [user, loading]);

    return (
        <Container>
            <Layout />
        </Container>
    );
}

export default Feed;