import { useTweets } from "@/providers/TweetsProvider";

import NewTweet from "../NewTweet";
import { TweetsWrapper } from "../Profile/styled";
import SectionWrapper from "../SectionWrapper";
import Tweet from "../Tweet";
import { HomeHeader, HomeHeaderWrapper } from "./styled";

const Home = () => {
    const allTweets = useTweets();

    return (
        <SectionWrapper>
            <HomeHeaderWrapper>
                <HomeHeader>Home</HomeHeader>
            </HomeHeaderWrapper>
            <NewTweet />
            <TweetsWrapper>
                {allTweets.map(({ tweetId, name, userName, text, likes, likedUsers, image, createdAt }) => {
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
                            createdAt={date} />
                    )
                })}
            </TweetsWrapper>
        </SectionWrapper>
    )
}

export default Home;