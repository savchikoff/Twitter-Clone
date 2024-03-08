import { Outlet } from "react-router-dom";

import Search from "@/ui/Search";

import SearchBar from "../SearchBar";
import Sidebar from "../Sidebar";
import { LayoutWrapper } from "./styled";

const Layout = () => {
    return (
        <LayoutWrapper>
            <Sidebar />
            <Outlet />
            <SearchBar />
        </LayoutWrapper>
    )
}

export default Layout;