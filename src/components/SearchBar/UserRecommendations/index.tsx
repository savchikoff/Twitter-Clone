import { collection, getDocs } from "firebase/firestore";
import { FC, useEffect, useState } from "react";

import { db } from "@/firebase";
import { useTweets } from "@/providers/TweetsProvider";

import RecommendedTweet from "../RecommendedTweet";
import User from "../User";
import { IRecommendedUsersProps, IUser } from "./interfaces";
import {
    UsersContainer,
    UsersHeader,
    UsersWrapper
} from "./styled";


const UserRecommendations: FC<IRecommendedUsersProps> = ({ searchValue }) => {
    const [users, setUsers] = useState<IUser[]>([]);
    const allTweets = useTweets();
    const isProfile = location.pathname === "/profile";

    const getUsers = async () => {
        const users: IUser[] = [];

        const userRef = collection(db, "Users");
        const userSnaps = await getDocs(userRef);

        userSnaps.forEach((userSnap) => {
            if (userSnap.exists()) {
                const { name, email, uid } = userSnap.data();
                users.push({ name, nickName: email.split("@")[0], uid })
            }
        });

        setUsers(users);
    };

    useEffect(() => {
        if (!isProfile) {
            getUsers();
        }
    }, [isProfile]);

    const filteredUsers = users.filter((user) => user.name.toLowerCase().includes((searchValue || '').toLowerCase()));
    const filteredTweets = allTweets.filter((tweet) => tweet.text.toLocaleLowerCase().includes((searchValue || '').toLowerCase()))

    return (
        <UsersContainer>
            <UsersWrapper>
                <UsersHeader>You might like</UsersHeader>
                {isProfile
                    ? filteredTweets.filter((_, i) => i < 2).map(({ tweetId, text, name, userName, createdAt }) => {
                        const { nanoseconds, seconds } = createdAt;
                        const date = new Date(seconds * 1000 + nanoseconds / 1000000).toLocaleDateString();
                        return (
                            <RecommendedTweet key={tweetId} tweetId={tweetId} text={text} name={name} userName={userName} createdAt={date} />
                        );
                    })
                    : filteredUsers.filter((_, i) => i < 2).map(({ name, nickName, uid }) => (
                        <User key={uid} userName={name} nickName={nickName} />
                    ))}
            </UsersWrapper>
        </UsersContainer>
    )
}

export default UserRecommendations;