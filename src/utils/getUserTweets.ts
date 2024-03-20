import { useTweets } from '@/providers/TweetsProvider';
import { useCurrentUser } from '@/providers/UserProvider';

export const useUserTweets = () => {
	const tweets = useTweets();
	const { uid } = useCurrentUser();
	if (!tweets) return [];
	return tweets.filter((tweet) => tweet.id === uid);
};
