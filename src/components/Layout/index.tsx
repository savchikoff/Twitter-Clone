import { Outlet } from "react-router-dom";

import SearchBar from "../SearchBar";
import Sidebar from "../Sidebar";
import { LayoutWrapper } from "./styled";
import { FC } from "react";

const Layout: FC = () => {
    return (
        <LayoutWrapper>
            <Sidebar />
            <Outlet />
            <SearchBar />
        </LayoutWrapper>
    )
}

export default Layout;