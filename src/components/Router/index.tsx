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
                    <Route path={ROUTES.feed} element={<FeedPage />}>
                        <Route index path={PRIVATE_ROUTES.home} element={<Home />} />
                        <Route path={PRIVATE_ROUTES.profile} element={<Profile />} />
                        <Route path={PRIVATE_ROUTES.tweet} element={<TweetPage />} />
                    </Route>
                    {Object.values(NAVIGATION).map((item) => {
                        const { path, element } = item;
                        return <Route element={element} key={path} path={path} />
                    })}
                    <Route path={ROUTES.notFound} element={<ErrorPage />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default Router;