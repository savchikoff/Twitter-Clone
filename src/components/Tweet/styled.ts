import styled from "styled-components";


export const TweetContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 24px;
    border-top: 1px solid #E6E6E6;
    border-bottom: 1px solid #E6E6E6;
`;

export const TweetWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 8px;
    font-size: 18px;
`;

export const UserImage = styled.img``;

export const TweetContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const TweetContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
    gap:8px;
`;

export const TweetImageWrapper = styled.div`
    max-width: 679px;
    max-height: 453px;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TweetImage = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

export const UserName = styled.div`
    font-size: 20px;
    font-weight: 700;
`;

export const UserNickName = styled.div`
    color: #666666;
`;

export const TweetPostDate = styled(UserNickName)``;

export const TweetText = styled.p`
`;

export const TweetOptionsWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;
    margin-top: 10px;
    position: relative; 
`;

export const TweetOptionsIcon = styled.img``;

export const TweetLike = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const TweetLikeIcon = styled.img`
    cursor: pointer;
`;

export const TweetLikesCounter = styled.div<{ $isLiked: boolean }>`
    font-size: 16px;
    color: ${({ $isLiked }) => ($isLiked ? '#EF1C5C' : '#536471')};
    font-weight:  ${({ $isLiked }) => ($isLiked ? '700' : '400')}
`;

export const DeleteButton = styled.button`
  position: absolute;
  bottom: -32px;
  left: -12px;
  background-color: #FF5858;
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  margin-left: 10px;
  z-index: 1;

  &:hover {
    background-color: #FF4242;
  }
`;