import { useCurrentUser } from "@/providers/UserProvider";
import { collection, getDocs } from 'firebase/firestore';
import { getUserTweets } from "@/utils/getUserTweets";
import { db } from "@/firebase";

import NewTweet from "../NewTweet";
import SectionWrapper from "../SectionWrapper";
import Tweet from "../Tweet";
import ProfileHead from "./ProfileHead";
import { TweetsWrapper } from "./styled";
import { useEffect, useState } from "react";
import Modal from "../Modal";
import NewUserData from "../NewUserData";

const Profile = () => {
    const { displayName, userName, uid } = useCurrentUser();
    const [isGoogle, setIsGoogle] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    console.log(isModalOpen);

    const handleModalStateChange = () => {
        setModalOpen(prevState => !prevState);
    };
    const tweets = getUserTweets();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const usersRef = collection(db, "Users");
                const usersSnaps = await getDocs(usersRef);
                usersSnaps.forEach((userSnap) => {
                    if (userSnap.exists()) {
                        if (userSnap.data().uid === uid) {
                            console.log("fire");
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