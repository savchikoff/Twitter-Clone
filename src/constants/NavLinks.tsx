/// <reference types="vite-plugin-svgr/client" />
import Bookmarks from "@/assets/bookmarks.svg?react";
import Explore from "@/assets/explore.svg?react";
import Home from "@/assets/home.svg?react";
import Lists from "@/assets/lists.svg?react";
import Messages from "@/assets/messages.svg?react";
import More from "@/assets/more.svg?react";
import Notifications from "@/assets/notification.svg?react";
import Profile from "@/assets/profile.svg?react";
import { ComponentType } from "react";

interface INavLink {
    name: string;
    to: string;
    icon: ComponentType;
}

export const NAV_LINKS: INavLink[] = [
    {
        name: "Home",
        to: "/",
        icon: Home
    },
    {
        name: "Explore",
        to: "/explore",
        icon: Explore
    },
    {
        name: "Notifications",
        to: "/notification",
        icon: Notifications
    },
    {
        name: "Messages",
        to: "/messages",
        icon: Messages
    },
    {
        name: "Bookmarks",
        to: "/bookmarks",
        icon: Bookmarks
    },
    {
        name: "Lists",
        to: "/lists",
        icon: Lists
    },
    {
        name: "Profile",
        to: "profile",
        icon: Profile
    },
    {
        name: "More",
        to: "/more",
        icon: More
    },

]