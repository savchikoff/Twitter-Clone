import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

import { auth } from "@/firebase";
import { Container } from "@/styled";
import Loader from "@/ui/Loader";

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