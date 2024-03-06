import React, { useState } from "react";
import options from "@assets/options.svg";
import user from "@assets/avatar.svg";
import likeUnactive from "@assets/like-unactive.svg";
import likeActive from "@assets/like-active.svg";
import postImage from "@assets/post-image.jpg";
import heat from "@assets/profile-header.jpg";

import {
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
    DeleteButton, // Add this styled component for the delete button
} from "./styled";

const Tweet = () => {
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [showDeleteButton, setShowDeleteButton] = useState(false);

    const handleLike = () => {
        setIsLiked((prevState) => !prevState);
        if (isLiked) {
            setLikes((prevLikes) => prevLikes - 1);
        } else {
            setLikes((prevLikes) => prevLikes + 1);
        }
    };

    const handleOptionsClick = () => {
        setShowDeleteButton(prevState => !prevState);
    };

    const handleDeleteClick = () => {
        setShowDeleteButton(false);
    };

    const isLikeClicked = isLiked ? likeActive : likeUnactive;

    return (
        <TweetContainer>
            <TweetWrapper>
                <UserImage src={user} />
                <TweetContentWrapper>
                    <TweetContent>
                        <UserInfo>
                            <UserName>Bobur</UserName>
                            <UserNickName>@bobur_mavlonov</UserNickName>
                            <TweetPostDate>Apr 1</TweetPostDate>
                        </UserInfo>
                        <TweetText>
                            4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni normallashtirishni reja qildim
                        </TweetText>
                        <TweetImageWrapper>
                            <TweetImage src={postImage} />
                        </TweetImageWrapper>
                    </TweetContent>
                    <TweetLike>
                        <TweetLikeIcon onClick={handleLike} src={isLikeClicked} />
                        <TweetLikesCounter $isLiked={isLiked}>{likes}</TweetLikesCounter>
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
