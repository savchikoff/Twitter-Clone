import { ComponentType, ReactNode } from "react";

import { ROUTES } from "./routes";
import { OnBoardingPage, SignInPage, SignUpPage, TweetPage } from "./routesComponents";

type Route = {
    path: string;
    element: ReactNode;
};

type NavigationType = Record<string, Route>;

const NAVIGATION: NavigationType = {
    OnBoarding: {
        path: ROUTES.onboarding,
        element: <OnBoardingPage />
    },
    SignUp: {
        path: ROUTES.register,
        element: <SignUpPage />
    },
    SignIn: {
        path: ROUTES.login,
        element: <SignInPage />
    },
    TweetPage: {
        path: ROUTES.tweet,
        element: <TweetPage />
    }
};

export default NAVIGATION;