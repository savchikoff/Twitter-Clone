import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Loader from "@/ui/Loader";
import { ROUTES, PRIVATE_ROUTES } from "@/constants/routes";
import NAVIGATION from "@/constants/navigation";

const ErrorPage = lazy(() => import("../../pages/ErrorPage"));
const FeedPage = lazy(() => import("../../pages/FeedPage"));
const Home = lazy(() => import("../Home"));
const Profile = lazy(() => import("../Profile"));
const TweetPage = lazy(() => import("../../pages/TweetPage"));

const Router = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route key={ROUTES.feed} path={ROUTES.feed} element={<FeedPage />}>
                        <Route key={PRIVATE_ROUTES.home} index path={PRIVATE_ROUTES.home} element={<Home />} />
                        <Route key={PRIVATE_ROUTES.profile} path={PRIVATE_ROUTES.profile} element={<Profile />} />
                        <Route key={PRIVATE_ROUTES.tweet} path={PRIVATE_ROUTES.tweet} element={<TweetPage />} />
                    </Route>
                    {Object.values(NAVIGATION).map((item) => {
                        const { path, element } = item;
                        return <Route element={element} key={path} path={path} />
                    })}
                    <Route key={ROUTES.notFound} path={ROUTES.notFound} element={<ErrorPage />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default Router;