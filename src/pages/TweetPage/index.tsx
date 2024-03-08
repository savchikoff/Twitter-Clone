import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Tweet from "@/components/Tweet";
import { ITweetProps } from "@/components/Tweet/interfaces";
import { db } from "@/firebase";
import { useTweets } from "@/providers/TweetsProvider";

const TweetPage = () => {
    const { id } = useParams();
    const [tweet, setTweet] = useState<ITweetProps | null>();
    const tweets = useTweets();

    // useEffect(() => {
    //     setTweet(tweets.filter(({ tweetId }) => tweetId === Number(id))[0]);
    // }, [id])

    return (
        <div>styled</div>
    )
}

export default TweetPage;