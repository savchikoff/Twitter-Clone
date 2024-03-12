import { useTweets } from "@/providers/TweetsProvider";
import { useCurrentUser } from "@/providers/UserProvider";

jest.mock("@/providers/TweetsProvider"); // Mock TweetsProvider
jest.mock("@/providers/UserProvider");   // Mock UserProvider

export const getUserTweets = () => {
    if (!useTweets) return [];

    const tweets = useTweets();
    const { uid } = useCurrentUser();
    return tweets.filter((tweet) => tweet.id === uid);
};