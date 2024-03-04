import styled from "styled-components";

export const TweetContainer = styled.div`
    padding: 24px 16px;
    border-top: 1px solid #D8D8D8;
    border-bottom: 1px solid #D8D8D8;
`;

export const TweetWrapper = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
`;

export const UserAvatar = styled.img`
`;

export const TweetContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
`;

export const TweetText = styled.textarea`
    font-family: inherit;
    font-size: 20px;
    width: 100%;
    resize: none;
    border: none;
    outline: none;
    &::placeholder{
        font-weight: 700;
    }
`;

export const TweetActionsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TweetImageButton = styled.input`
    cursor: pointer;
`;

export const TweetImage = styled.img`
    width: 24px;
    height: 24px;
`

export const TweetAddButton = styled.button`
    font-size: 18px;
    font-weight: 700;
    background-color: #1D9BF0;
    padding: 15px 30px;
    color: #FFFFFF;
    border: none;
    outline: none;
    border-radius: 50px;
    transition: all 0.3s ease;

    &:hover{
        background-color: #A5D9FA;
    }
`