import { useTweets } from "@/providers/TweetsProvider";
import { useCurrentUser } from "@/providers/UserProvider";

export const getUserTweets = () => {
    if (!useTweets) return [];

    const tweets = useTweets();
    const { uid } = useCurrentUser();
    return tweets.filter((tweet) => tweet.id === uid);
};