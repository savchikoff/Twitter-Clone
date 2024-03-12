import bookmarks from "@assets/bookmarks.svg";
import explore from "@assets/explore.svg";
import home from "@assets/home.svg";
import lists from "@assets/lists.svg";
import messages from "@assets/messages.svg";
import more from "@assets/more.svg";
import notifications from "@assets/notification.svg";
import profile from "@assets/profile.svg";

interface INavLink {
    name: string;
    to: string;
    src: string;
}

export const NAV_LINKS: INavLink[] = [
    {
        name: "Home",
        to: "/",
        src: home
    },
    {
        name: "Explore",
        to: "/explore",
        src: explore
    },
    {
        name: "Notifications",
        to: "/notification",
        src: notifications
    },
    {
        name: "Messages",
        to: "/messages",
        src: messages
    },
    {
        name: "Bookmarks",
        to: "/bookmarks",
        src: bookmarks
    },
    {
        name: "Lists",
        to: "/lists",
        src: lists
    },
    {
        name: "Profile",
        to: "profile",
        src: profile
    },
    {
        name: "More",
        to: "/more",
        src: more
    },

]