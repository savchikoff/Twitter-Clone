import { FC } from "react";
import { PublishDate, TweetContainer, TweetWrapper, TweetInfo, UserName, UserNickName, UserPersonalData, UserInfo, TweetText } from "./styled";
import { useNavigate } from "react-router-dom";

interface IRecommendedTweetProps {
    tweetId: string;
    name: string;
    userName: string;
    text: string;
    createdAt: string;
}

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