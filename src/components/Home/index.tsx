import { useTweets } from "@/providers/TweetsProvider";

import NewTweet from "../NewTweet";
import { TweetsWrapper } from "../Profile/styled";
import SectionWrapper from "../SectionWrapper";
import Tweet from "../Tweet";
import { HomeHeader, HomeHeaderWrapper } from "./styled";
import { useEffect, useState } from "react";

const Home = () => {
    const allTweets = useTweets();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 700);
    }, []);

    return (
        <SectionWrapper>
            <HomeHeaderWrapper>
                <HomeHeader>Home</HomeHeader>
            </HomeHeaderWrapper>
            <NewTweet />

            <TweetsWrapper>
                {allTweets.map(({ tweetId, name, userName, text, likes, likedUsers, image, createdAt, id }) => {
                    const { nanoseconds, seconds } = createdAt;
                    const date = new Date(seconds * 1000 + nanoseconds / 1000000).toLocaleDateString();
                    return (
                        <Tweet key={tweetId}
                            tweetId={tweetId}
                            name={name.split(" ")[0]}
                            likedUsers={likedUsers}
                            userName={userName}
                            text={text}
                            likes={likes}
                            image={image}
                            createdAt={date}
                            id={id} />
                    )
                })}
            </TweetsWrapper>
        </SectionWrapper>
    )
}

export default Home;