import styled from "styled-components";

export const TweetContainer = styled.div`
    padding: 16px;
    border-radius: 20px;
    border: 1px solid #636464;
`;

export const TweetWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const TweetInfo = styled.div`
    display: flex;
    gap: 4px;
`;

export const UserPersonalData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const UserInfo = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

export const UserName = styled.div`
    color: #000000;
`;

export const UserNickName = styled.div`
    color: #636464;
`;

export const PublishDate = styled.div`
    cursor: pointer;
    color: #636464;
    transition: all 0.3s ease;

    &:hover{
        color: #1DA1F2
    }
`;

export const TweetText = styled.div`
    word-break: break-word;
`;
