import {
	createContext,
	FC,
	ReactNode,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';
import {
	collection,
	getDocs,
	orderBy,
	query,
	Timestamp,
} from 'firebase/firestore';

import { db } from '@/config/firebase';

export type TweetsContextType = {
	tweetId: string;
	text: string;
	name: string;
	userName: string;
	email: string;
	image: string;
	id: string;
	likes: number;
	likedUsers: string[];
	createdAt: Timestamp;
}[];

interface ITweetsProviderProps {
	children: ReactNode;
}

const TweetsContext = createContext<TweetsContextType>([]);

export const useTweets = () => {
	return useContext(TweetsContext);
};

export const TweetsProvider: FC<ITweetsProviderProps> = ({ children }) => {
	const [tweets, setTweets] = useState<TweetsContextType>([]);

	const getTweets = async () => {
		const tweets: TweetsContextType = [];
		const tweetsRef = collection(db, 'Tweets');
		const tweetsQueue = query(tweetsRef, orderBy('createdAt', 'desc'));
		const tweetsSnaps = await getDocs(tweetsQueue);

		tweetsSnaps.forEach((tweetSnap) => {
			if (tweetSnap.exists()) {
				const {
					text,
					name,
					userName,
					email,
					image,
					id,
					createdAt,
					likes,
					likedUsers,
				} = tweetSnap.data();
				tweets.push({
					tweetId: tweetSnap.id,
					text,
					name,
					userName,
					email,
					image,
					id,
					createdAt,
					likes,
					likedUsers,
				});
			}
		});

		setTweets(tweets);
	};

	useEffect(() => {
		getTweets();
	}, []);

	const memoizedTweets = useMemo(() => tweets, [tweets]);

	return (
		<TweetsContext.Provider value={memoizedTweets}>
			{children}
		</TweetsContext.Provider>
	);
};
