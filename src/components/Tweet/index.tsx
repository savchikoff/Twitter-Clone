import { FC, useEffect, useRef, useState } from 'react';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';

import user from '@/assets/icons/avatar.svg';
import likeActive from '@/assets/icons/like-active.svg';
import likeUnactive from '@/assets/icons/like-unactive.svg';
import Options from '@/assets/icons/options.svg?react';
import { db, storage } from '@/config/firebase';
import { useCurrentUser } from '@/providers/UserProvider';
import { isLikedByMe } from '@/utils/isLikedByMe';

import { ITweetProps } from './interfaces';
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
	TweetOptionsWrapper,
	TweetPostDate,
	TweetText,
	TweetWrapper,
	UserImage,
	UserInfo,
	UserName,
	UserNickName,
} from './styled';

const Tweet: FC<ITweetProps> = ({
	tweetId,
	name,
	userName,
	likedUsers,
	text,
	likes,
	createdAt,
	image,
	id,
}) => {
	const { uid } = useCurrentUser();

	const [likesCount, setLikesCount] = useState(likes);
	const [isLiked, setIsLiked] = useState(() => isLikedByMe(likedUsers, uid));
	const [isLiking, setIsLiking] = useState(false);
	const [imageURL, setImageURL] = useState('');
	const [showDeleteButton, setShowDeleteButton] = useState(false);
	const deleteButtonRef = useRef<HTMLButtonElement | null>(null);
	const navigate = useNavigate();

	const handleLike = async () => {
		setIsLiking(true);
		const tweetRef = doc(db, 'Tweets', tweetId);
		if (isLiked) {
			try {
				await updateDoc(tweetRef, {
					likes: likesCount - 1,
					likedUsers: likedUsers.filter((userId) => userId !== uid),
				});
				setLikesCount((prevLikes) => prevLikes - 1);
				setIsLiked(false);
			} catch (e) {
				console.error(e);
			}
		} else {
			try {
				await updateDoc(tweetRef, {
					likes: likesCount + 1,
					likedUsers: [...likedUsers, uid],
				});
				setLikesCount((prevLikes) => prevLikes + 1);
				setIsLiked(true);
			} catch (e) {
				console.error(e);
			}
		}
		setIsLiking(false);
	};

	const handleOptionsClick = () => {
		setShowDeleteButton((prevState) => !prevState);
	};

	const handleDeleteClick = async () => {
		const tweetRef = doc(db, 'Tweets', tweetId);
		try {
			await deleteDoc(tweetRef);
		} catch (e) {
			console.error(e);
		}
		setShowDeleteButton(false);
		location.reload();
	};

	const handleTweetClick = (tweetId: string) => () => {
		navigate(`/tweet/${tweetId}`);
	};

	const handleClickOutside = (e: MouseEvent) => {
		if (
			deleteButtonRef.current &&
			!deleteButtonRef.current.contains(e.target as Node)
		) {
			setShowDeleteButton(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

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
							<TweetPostDate onClick={handleTweetClick(tweetId)}>
								{createdAt}
							</TweetPostDate>
						</UserInfo>
						<TweetText>{text}</TweetText>
						{imageURL && (
							<TweetImageWrapper>
								<TweetImage src={imageURL} />
							</TweetImageWrapper>
						)}
					</TweetContent>
					<TweetLike>
						<TweetLikeIcon
							onClick={isLiking ? undefined : handleLike}
							src={isLikeClicked}
							alt="likes"
						/>
						<TweetLikesCounter $isLiked={isLiked}>
							{likesCount}
						</TweetLikesCounter>
					</TweetLike>
				</TweetContentWrapper>
			</TweetWrapper>
			<TweetOptionsWrapper>
				{id === uid && <Options onClick={handleOptionsClick} />}
				{showDeleteButton && (
					<DeleteButton ref={deleteButtonRef} onClick={handleDeleteClick}>
						Delete
					</DeleteButton>
				)}
			</TweetOptionsWrapper>
		</TweetContainer>
	);
};

export default Tweet;
