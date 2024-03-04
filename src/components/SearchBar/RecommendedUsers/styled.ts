import styled from "styled-components";

export const UsersContainer = styled.div`
    min-width: 373px;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: #F7F9F9;
`;

export const UsersHeader = styled.h3`
    font-size: 24px;
    font-weight: 800;
`

export const UsersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 28px;
`;

export const UsersInfoWrapper = styled.div`
    display: flex;
    gap: 24px;
`

export const UserWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 32px;
`;

export const UserInfoWrapper = styled.div`
    display: flex;
    gap: 12px;
`

export const UserImage = styled.img`
    width: 60px;
    height: 60px;
`;

export const UserDataWrapper = styled.div`
    display: flex;
    gap: 12px;
`;

export const UserData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

export const UserName = styled.div`
    font-size: 18px;
    font-weight: 600;
`;

export const UserNickName = styled.div`
    font-size: 18px;
    color: #636464;
`

export const FollowButton = styled.button`
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
    min-height: 38px;
    min-width: 98px;
    padding: 10px 18px;
    background-color: #000000;
    color: #FFFFFF;
    box-sizing: border-box;
    border-radius: 50px;
`;