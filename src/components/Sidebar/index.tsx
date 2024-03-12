import avatar from "@assets/avatar.svg"
import twitter from "@assets/twitter-logo.svg";
import { useState } from "react";

import { NAV_LINKS } from "@/constants/navLinks";
import { logOut } from "@/firebase";
import { useCurrentUser } from "@/providers/UserProvider";

import Modal from "../Modal";
import NewTweet from "../NewTweet";
import NavItem from "./NavItem";
import { LogoutButton, NavigationContainer, SidebarContainer, SidebarWrapper, TweetButton, TwitterLogo, UserAvatar, UserInfo, UserName, UserNick, UserWrapper } from "./styled";

const Sidebar = () => {
    const { userName, displayName } = useCurrentUser();
    const [isModalOpen, setModalOpen] = useState(false);

    const handleModalStateChange = () => {
        setModalOpen(prevState => !prevState);
    };

    return (
        <SidebarContainer>
            <SidebarWrapper>
                <TwitterLogo src={twitter} alt="Twitter logo" />
                <NavigationContainer>
                    {NAV_LINKS.map(({ name, to, src }) => {
                        const path = to.includes("/") ? to : "/" + to;
                        const isActive = location.pathname === path;
                        if (name === "Profile") {
                            return <NavItem isActive={isActive} key={name} icon={src} label={name} to={to} isPrimary />
                        }
                        return <NavItem isActive={isActive} key={name} icon={src} label={name} to={to} />
                    })}
                </NavigationContainer>
                <TweetButton onClick={handleModalStateChange}>Tweet</TweetButton>
                <UserWrapper>
                    <UserAvatar src={avatar} />
                    <UserInfo>
                        <UserName>{displayName}</UserName>
                        <UserNick>@{userName}</UserNick>
                    </UserInfo>
                </UserWrapper>
                <LogoutButton onClick={logOut}>Log out</LogoutButton>
                <Modal isOpen={isModalOpen} close={handleModalStateChange}>
                    <NewTweet />
                </Modal>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;