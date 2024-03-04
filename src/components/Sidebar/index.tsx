import { SidebarContainer, SidebarWrapper, TwitterLogo, NavigationContainer, TweetButton, LogoutButton, UserWrapper, UserAvatar, UserInfo, UserName, UserNick } from "./styled";
import twitter from "@assets/twitter-logo.svg";
import { logOut } from "@/firebase";
import NavItem from "./NavItem";
import { NAV_LINKS } from "@/constants/NavLinks";
import avatar from "@assets/avatar.svg"

const Sidebar = () => {
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
                <TweetButton>Tweet</TweetButton>
                <UserWrapper>
                    <UserAvatar src={avatar} />
                    <UserInfo>
                        <UserName>Bobur</UserName>
                        <UserNick>@savchik.official</UserNick>
                    </UserInfo>
                </UserWrapper>
                <LogoutButton onClick={logOut}>Log out</LogoutButton>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;