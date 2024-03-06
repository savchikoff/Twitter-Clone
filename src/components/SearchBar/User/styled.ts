import styled from "styled-components";

export const UsersInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    width: 100%;
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