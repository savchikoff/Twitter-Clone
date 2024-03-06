import { SidebarContainer, SidebarWrapper, TwitterLogo, NavigationContainer, TweetButton, LogoutButton, UserWrapper, UserAvatar, UserInfo, UserName, UserNick } from "./styled";
import twitter from "@assets/twitter-logo.svg";
import { auth } from "@/firebase";
import { logOut } from "@/firebase";
import NavItem from "./NavItem";
import { NAV_LINKS } from "@/constants/NavLinks";
import avatar from "@assets/avatar.svg"
import { useCurrentUser } from "@/providers/UserProvider";
import { useState } from "react";
import Modal from "../Modal";
import NewTweet from "../NewTweet";

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
                        if (name === "Profile") {
                            return <NavItem icon={src} label={name} to={to} isPrimary={true} />
                        }
                        return <NavItem icon={src} label={name} to={to} />
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