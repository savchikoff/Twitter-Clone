import styled from "styled-components";

export const ProfileHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 0 24px 24px 24px;
`;

export const ProfileHeaderName = styled.h6`
    font-size: 20px;    
`;

export const ProfileHeaderTweets = styled.h6`
    font-size: 16px; 
    color: #666666;   
`;

export const ProfileHeat = styled.div`
    width: 100%;
    overflow: hidden;
`;

export const ProfileHeatImage = styled.img`
    object-fit: cover;
    width: 100%;
`

export const ProfileInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 25px;
    margin-top: -40px;
    padding-bottom: 48px;
    border-bottom: 1px solid #D8D8D8;
`;

export const TopInfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
`;

export const ProfileImage = styled.img`
    width: 126px;
    height: 138px;
`;

export const EditButton = styled.button`
    font-size: 18px;
    font-weight: 600;
    padding: 10px 16px;
    border: none;
    outline: none;
    background-color: transparent;
    border: 1px solid #000000;
    border-radius: 50px;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover{
        background-color: #F1F1F1;
    }
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 16px;
`;

export const UserName = styled.h3`
    font-size: 24px;
`

export const UserNickname = styled.span`
    color: #666666;
`

export const ProfileDescription = styled.div`
    font-size: 18px;
    margin-bottom: 56px;
`;

export const SubscriptionsWrapper = styled.div`
    display: flex;
    gap: 32px;
`;

export const FollowingInfo = styled.span`
    font-size: 18px;
`

export const FollowersInfo = styled(FollowingInfo)``;

export const Strong = styled.strong``;