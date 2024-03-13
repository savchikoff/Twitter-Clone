import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Tweet from "@/components/Tweet";
import { ITweetProps } from "@/components/Tweet/interfaces";
import { useTweets } from "@/providers/TweetsProvider";
import SectionWrapper from "@/components/SectionWrapper";
import { BackLinkIcon, BackLinkText, BackLinkContainer, BackLinkWrapper } from "./styled";
import backArrow from "@/assets/back-arrow.svg"

const TweetPage = () => {
    const { id } = useParams();
    const [tweet, setTweet] = useState<ITweetProps | null>();
    const tweets = useTweets();

    useEffect(() => {
        const filteredTweet = tweets.filter(({ tweetId }) => tweetId === id)[0];

        if (!filteredTweet) {
            setTweet(null);
            return;
        }

        const { createdAt } = filteredTweet;
        const { nanoseconds, seconds } = createdAt;
        const date = new Date(seconds * 1000 + nanoseconds / 1000000).toLocaleDateString();
        const tweetData = { ...filteredTweet, createdAt: date };
        setTweet(tweetData);
    }, [id, tweets]);

    const navigate = useNavigate();

    const handleBackHome = () => {
        navigate("/");
    }

    return (
        tweet ?
            <SectionWrapper>
                <BackLinkContainer onClick={handleBackHome}>
                    <BackLinkWrapper>
                        <BackLinkIcon src={backArrow} />
                        <BackLinkText>Back</BackLinkText>
                    </BackLinkWrapper>
                </BackLinkContainer>
                <Tweet key={tweet.tweetId}
                    tweetId={tweet.tweetId}
                    name={tweet.name.split(" ")[0]}
                    likedUsers={tweet.likedUsers}
                    userName={tweet.userName}
                    text={tweet.text}
                    likes={tweet.likes}
                    image={tweet.image}
                    createdAt={tweet.createdAt}
                    id={tweet.id} />
            </SectionWrapper>
            : <div>Loading..</div>
    )
}

export default TweetPage;