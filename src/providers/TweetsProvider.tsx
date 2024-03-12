import { collection, getDocs, orderBy, query, Timestamp } from "firebase/firestore";
import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";

import { db } from "@/firebase";

export type TweetsContext = {
    tweetId: string;
    text: string,
    name: string,
    userName: string,
    email: string,
    image: string,
    id: string,
    likes: number,
    likedUsers: string[],
    createdAt: Timestamp
}[]

interface ITweetsProviderProps {
    children: ReactNode;
}

const TweetsContext = createContext<TweetsContext>([]);

export const useTweets = () => {
    return useContext(TweetsContext);
}

export const TweetsProvider: FC<ITweetsProviderProps> = ({ children }) => {

    const [tweets, setTweets] = useState<TweetsContext>([]);

    const getTweets = async () => {
        const tweets: TweetsContext = [];
        const tweetsRef = collection(db, "Tweets");
        const tweetsQueue = query(tweetsRef, orderBy("createdAt", "desc"));
        const tweetsSnaps = await getDocs(tweetsQueue);

        tweetsSnaps.forEach((tweetSnap) => {
            if (tweetSnap.exists()) {
                const { text, name, userName, email, image, id, createdAt, likes, likedUsers } = tweetSnap.data();
                tweets.push({ tweetId: tweetSnap.id, text, name, userName, email, image, id, createdAt, likes, likedUsers });
            }
        });

        setTweets(tweets);
    };

    useEffect(() => {
        getTweets();
    }, []);

    return <TweetsContext.Provider value={tweets}>{children}</TweetsContext.Provider>
}