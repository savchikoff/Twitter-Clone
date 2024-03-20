import { ChangeEvent, FC, useState } from 'react';

import avatar from '@/assets/icons/avatar.svg';
import image from '@/assets/icons/img-icon.svg';
import { useNotification } from '@/providers/NotificationsProvider';
import { useCurrentUser } from '@/providers/UserProvider';
import Notification from '@/ui/Notification';
import { addTweet, FileType } from '@/utils/addTweet';

import {
	FileInput,
	FileInputLabel,
	FileInputWrapper,
	InputIcon,
	TweetActionsWrapper,
	TweetAddButton,
	TweetContainer,
	TweetContentWrapper,
	TweetText,
	TweetWrapper,
	UserAvatar,
} from './styled';

const NewTweet: FC = () => {
	const { displayName, userName, email, uid } = useCurrentUser();
	const notification = useNotification();

	const [tweetText, setTweetText] = useState('');
	const [imageFile, setImageFile] = useState<FileType>(null);
	const [imageName, setImageName] = useState('');

	const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setTweetText(e.target.value);
	};

	const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		const maxFileSize = 700 * 1024;
		if (file && file.size < maxFileSize) {
			setImageFile(file);
			setImageName(file.name);
		} else if (file && file.size > maxFileSize) {
			notification?.open("Max image size is 700 Kb", true);
		}
	};

	const sendTweet = async () => {
		try {
			await addTweet(tweetText, displayName, userName, email, imageFile, uid);
			setTweetText('');
			notification?.open("New tweet was added", false);
		} catch (e: any) {
			setTweetText('');
			console.error(e);
			notification?.open(e.message, true);
		} finally {
			setImageName('');
			setImageFile(null);
		}
	};

	return (
		<TweetContainer>
			<TweetWrapper>
				<UserAvatar src={avatar} />
				<TweetContentWrapper>
					<TweetText
						onChange={handleTextChange}
						value={tweetText}
						placeholder="What’s happening"
					/>
					<TweetActionsWrapper>
						<FileInputWrapper>
							<FileInput
								type="file"
								id="fileInput"
								accept="image/jpg"
								onChange={handleImageChange}
							/>
							<FileInputLabel htmlFor="fileInput">
								<InputIcon src={image} alt="File Icon" />
								{imageName || 'Choose a file'}
							</FileInputLabel>
						</FileInputWrapper>
						<TweetAddButton disabled={!tweetText} onClick={sendTweet}>
							Tweet
						</TweetAddButton>
					</TweetActionsWrapper>
				</TweetContentWrapper>
			</TweetWrapper>
		</TweetContainer>
	);
};

export default NewTweet;
