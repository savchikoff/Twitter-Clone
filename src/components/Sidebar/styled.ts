import styled from "styled-components";

export const SidebarContainer = styled.div`
    margin-top: 30px;
`;

export const TwitterLogo = styled.img`
    width: 40px;
    height: 33px;
    margin-bottom: 48px;
`;

export const SidebarWrapper = styled.div``;

export const NavigationContainer = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-bottom: 28px;
`

export const TweetButton = styled.button`
    cursor: pointer;
    height: 55px;
    font-size: 18px;
    font-weight: 700;
    color: #FFFFFF;
    min-width: 230px;
    background-color: #1D9BF0;
    outline: none;
    border: none;
    border-radius: 28px;
    margin-bottom: 40px;
`

export const LogoutButton = styled.button`
    cursor: pointer;
    height: 55px;
    font-size: 18px;
    font-weight: 700;
    color: #FFFFFF;
    min-width: 230px;
    background-color: #B3B8BB;
    outline: none;
    border: none;
    border-radius: 28px;
`

export const UserWrapper = styled.div`
    display: flex;
    gap: 16px;
    margin-bottom: 16px;
`

export const UserAvatar = styled.img`
    width: 49px;
    height: 54px;
`

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

export const UserName = styled.div`
    font-weight: 600;
`

export const UserNick = styled.div`
    color: #666666;
`