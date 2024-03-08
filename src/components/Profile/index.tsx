import { useTweets } from "@/providers/TweetsProvider";
import { useCurrentUser } from "@/providers/UserProvider";
import { getUserTweets } from "@/utils/getUserTweets";

import NewTweet from "../NewTweet";
import SectionWrapper from "../SectionWrapper";
import Tweet from "../Tweet";
import ProfileHead from "./ProfileHead";
import { TweetsWrapper } from "./styled";

const Profile = () => {
    const { displayName, userName } = useCurrentUser();
    const tweets = getUserTweets();

    console.log(tweets);
    console.log(useTweets());


    return (
        <SectionWrapper>
            <ProfileHead displayName={displayName} userName={userName} />
            <NewTweet />
            <TweetsWrapper>
                {tweets.map(({ tweetId, name, userName, text, likedUsers, likes, image, createdAt }) => {
                    const { nanoseconds, seconds } = createdAt;
                    const date = new Date(seconds * 1000 + nanoseconds / 1000000).toLocaleDateString();
                    return (
                        <Tweet key={tweetId}
                            tweetId={tweetId}
                            name={name.split(" ")[0]}
                            userName={userName}
                            likedUsers={likedUsers}
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

export default Profile;