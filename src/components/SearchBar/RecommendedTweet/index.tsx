import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { IRecommendedTweetProps } from "./interfaces";
import { PublishDate, TweetContainer, TweetInfo, TweetText, TweetWrapper, UserInfo, UserName, UserNickName, UserPersonalData } from "./styled";

const RecommendedTweet: FC<IRecommendedTweetProps> = ({ tweetId, name, userName, text, createdAt }) => {
    const navigate = useNavigate();

    const handleTweetClick = (tweetId: string) => () => {
        navigate(`/tweet/${tweetId}`);
    };

    return (
        <TweetContainer>
            <TweetWrapper>
                <TweetInfo>
                    <UserInfo>
                        <UserPersonalData>
                            <UserName>{name}</UserName>
                            <UserNickName>@{userName}</UserNickName>
                        </UserPersonalData>
                        <PublishDate onClick={handleTweetClick(tweetId)}>{createdAt}</PublishDate>
                    </UserInfo>
                </TweetInfo>
                <TweetText>
                    {text}
                </TweetText>
            </TweetWrapper>
        </TweetContainer>
    )
}

export default RecommendedTweet;