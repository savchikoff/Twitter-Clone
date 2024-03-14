import { FC, useCallback, useEffect, useState } from "react";

import avatar from "@/assets/avatar.svg"
import twitter from "@/assets/twitter-logo.svg";
import { NAV_LINKS } from "@/constants/navLinks";
import { logOut } from "@/firebase";
import { useCurrentUser } from "@/providers/UserProvider";

import Modal from "../Modal";
import NewTweet from "../NewTweet";
import NavItem from "./NavItem";
import SidebarBurger from "./SidebarBurger";
import { LogoutButton, NavigationContainer, SidebarContainer, SidebarWrapper, TweetButton, TwitterLogo, UserAvatar, UserInfo, UserName, UserNick, UserWrapper } from "./styled";

const Sidebar: FC = () => {
    const { userName, displayName } = useCurrentUser();
    const [isModalOpen, setModalOpen] = useState(false);

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isTablet = width < 1024;

    const handleModalStateChange = useCallback(() => {
        setModalOpen(prevState => !prevState);
    }, []);

    if (!isTablet) {
        return (
            <SidebarContainer>
                <SidebarWrapper>
                    <TwitterLogo src={twitter} alt="Twitter logo" />
                    <NavigationContainer>
                        {NAV_LINKS.map(({ name, to, icon }) => {
                            const path = to.includes("/") ? to : `/${to}`;
                            const isActive = location.pathname === path;
                            if (name === "Profile") {
                                return <NavItem isActive={isActive} key={name} Icon={icon} label={name} to={to} isPrimary />
                            }
                            return <NavItem isActive={isActive} key={name} Icon={icon} label={name} to={to} />
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
                    <LogoutButton data-cy="logout-btn" onClick={logOut}>Log out</LogoutButton>
                    <Modal isOpen={isModalOpen} close={handleModalStateChange}>
                        <NewTweet />
                    </Modal>
                </SidebarWrapper>
            </SidebarContainer>
        )
    }

    return (
        <SidebarBurger dataCy="sidebar-burger">
            <SidebarContainer>
                <SidebarWrapper>
                    <NavigationContainer>
                        {NAV_LINKS.map(({ name, to, icon }) => {
                            const path = to.includes("/") ? to : `/${to}`;
                            const isActive = location.pathname === path;
                            if (name === "Profile") {
                                return <NavItem isActive={isActive} key={name} Icon={icon} label={name} to={to} isPrimary />
                            }
                            return <NavItem isActive={isActive} key={name} Icon={icon} label={name} to={to} />
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
                    <LogoutButton data-cy="logout-btn" onClick={logOut}>Log out</LogoutButton>
                    <Modal isOpen={isModalOpen} close={handleModalStateChange}>
                        <NewTweet />
                    </Modal>
                </SidebarWrapper>
            </SidebarContainer>
        </SidebarBurger>
    )
}

export default Sidebar;