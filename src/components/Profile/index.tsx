import { FC, useCallback, useEffect, useState } from "react";
import { collection, getDocs } from 'firebase/firestore';

import { db } from "@/config/firebase";
import { useCurrentUser } from "@/providers/UserProvider";
import { useUserTweets } from "@/utils/getUserTweets";

import Modal from "../Modal";
import NewTweet from "../NewTweet";
import NewUserData from "../NewUserData";
import SectionWrapper from "../SectionWrapper";
import Tweet from "../Tweet";
import ProfileHead from "./ProfileHead";
import { TweetsWrapper } from "./styled";

const Profile: FC = () => {
    const { displayName, userName, uid } = useCurrentUser();
    const [isGoogle, setIsGoogle] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    const handleModalStateChange = useCallback(() => {
        setModalOpen(prevState => !prevState);
    }, []);
    const tweets = useUserTweets();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const usersRef = collection(db, "Users");
                const usersSnaps = await getDocs(usersRef);
                usersSnaps.forEach((userSnap) => {
                    if (userSnap.exists()) {
                        if (userSnap.data().uid === uid) {
                            setIsGoogle(userSnap.data().authProvider === "google");
                        }
                    }
                });
            } catch (error) {
                console.error(error);
            }
        };

        if (uid) {
            fetchUser();
        }
    }, [uid]);



    return (
        <SectionWrapper>
            <ProfileHead displayName={displayName} userName={userName} isGoogle={isGoogle} handleModalOpen={handleModalStateChange} />
            <NewTweet />
            <TweetsWrapper>
                {tweets.map(({ tweetId, name, userName, text, likedUsers, likes, image, createdAt, id }) => {
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
                            createdAt={date}
                            id={id} />
                    )
                })}
            </TweetsWrapper>
            <Modal isOpen={isModalOpen} close={handleModalStateChange}>
                <NewUserData />
            </Modal>
        </SectionWrapper>
    )
}

export default Profile;