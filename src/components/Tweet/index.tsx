import user from "@assets/avatar.svg";
import likeActive from "@assets/like-active.svg";
import likeUnactive from "@assets/like-unactive.svg";
import options from "@assets/options.svg";
import postImage from "@assets/post-image.jpg";
import heat from "@assets/profile-header.jpg";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { FC, useEffect, useState } from "react";

import { db, storage } from "@/firebase";
import { useCurrentUser } from "@/providers/UserProvider";
import { isLikedByMe } from "@/utils/isLikedByMe";

import { ITweetProps } from "./interfaces";
import {
    DeleteButton, // Add this styled component for the delete button
    TweetContainer,
    TweetContent,
    TweetContentWrapper,
    TweetImage,
    TweetImageWrapper,
    TweetLike,
    TweetLikeIcon,
    TweetLikesCounter,
    TweetOptionsIcon,
    TweetOptionsWrapper,
    TweetPostDate,
    TweetText,
    TweetWrapper,
    UserImage,
    UserInfo,
    UserName,
    UserNickName,
} from "./styled";

const Tweet: FC<ITweetProps> = ({ tweetId, name, userName, likedUsers, text, likes, createdAt, image }) => {
    const { uid } = useCurrentUser();

    const [likesCount, setLikesCount] = useState(likes);
    const [isLiked, setIsLiked] = useState(() => isLikedByMe(likedUsers, uid));
    const [isLiking, setIsLiking] = useState(false);
    const [imageURL, setImageURL] = useState("");
    const [showDeleteButton, setShowDeleteButton] = useState(false);

    const handleLike = async () => {
        setIsLiking(true);
        const tweetRef = doc(db, "Tweets", tweetId);
        if (isLiked) {
            try {
                await updateDoc(tweetRef, {
                    likes: likesCount - 1,
                    likedUsers: likedUsers.filter(userId => userId !== uid)
                })
                setLikesCount((prevLikes) => prevLikes - 1);
                setIsLiked(false);
            } catch (e) {
                console.error(e);
            }
        } else {
            try {
                await updateDoc(tweetRef, {
                    likes: likesCount + 1,
                    likedUsers: [...likedUsers, uid]
                })
                setLikesCount((prevLikes) => prevLikes + 1);
                setIsLiked(true);
            } catch (e) {
                console.error(e);
            }
        }
        setIsLiking(false);
    };

    const handleOptionsClick = () => {
        setShowDeleteButton(prevState => !prevState);
    };

    const handleDeleteClick = async () => {
        const tweetRef = doc(db, "Tweets", tweetId);
        try {
            await deleteDoc(tweetRef);
        } catch (e) {
            console.error(e);
        }
        setShowDeleteButton(false);
        location.reload();
    };

    useEffect(() => {
        const getImageURL = async () => {
            if (image) {
                const url = await getDownloadURL(ref(storage, image));
                setImageURL(url);
            }
        };
        getImageURL();
    }, [image]);

    const isLikeClicked = isLiked ? likeActive : likeUnactive;

    return (
        <TweetContainer>
            <TweetWrapper>
                <UserImage src={user} />
                <TweetContentWrapper>
                    <TweetContent>
                        <UserInfo>
                            <UserName>{name}</UserName>
                            <UserNickName>@{userName}</UserNickName>
                            <TweetPostDate>{createdAt}</TweetPostDate>
                        </UserInfo>
                        <TweetText>
                            {text}
                        </TweetText>
                        {imageURL &&
                            <TweetImageWrapper>
                                <TweetImage src={imageURL} />
                            </TweetImageWrapper>
                        }
                    </TweetContent>
                    <TweetLike>
                        <TweetLikeIcon onClick={isLiking ? undefined : handleLike} src={isLikeClicked} alt="likes" />
                        <TweetLikesCounter $isLiked={isLiked}>{likesCount}</TweetLikesCounter>
                    </TweetLike>
                </TweetContentWrapper>
            </TweetWrapper>
            <TweetOptionsWrapper>
                <TweetOptionsIcon src={options} onClick={handleOptionsClick} />
                {showDeleteButton && <DeleteButton onClick={handleDeleteClick}>Delete</DeleteButton>}
            </TweetOptionsWrapper>
        </TweetContainer>
    );
};

export default Tweet;
