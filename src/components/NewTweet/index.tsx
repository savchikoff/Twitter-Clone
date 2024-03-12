import { ChangeEvent, FC, useState } from "react";
import avatar from "@/assets/avatar.svg";
import image from "@/assets/img-icon.svg";

import Notification from "@/ui/Notification";

import { useCurrentUser } from "@/providers/UserProvider";
import { addTweet, FileType } from "@/utils/addTweet";

import { FileInput, FileInputLabel, FileInputWrapper, InputIcon, TweetActionsWrapper, TweetAddButton, TweetContainer, TweetContentWrapper, TweetText, TweetWrapper, UserAvatar } from "./styled";

const NewTweet: FC = () => {
    const { displayName, userName, email, uid } = useCurrentUser();
    const [isNotificationActive, setNotificationActive] = useState(false);

    const [tweetText, setTweetText] = useState("");
    const [imageFile, setImageFile] = useState<FileType>(null);
    const [imageName, setImageName] = useState('');

    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTweetText(e.target.value);
    };

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setImageFile(file);
            setImageName(file.name);
        }
    };

    const sendTweet = async () => {
        try {
            await addTweet(tweetText, displayName, userName, email, imageFile, uid);
            setTweetText("");
            setNotificationActive(true);
        } catch (e) {
            setTweetText("");
            console.error(e);
        } finally {
            setImageName("");
            setImageFile(null);
        }
    }

    const handleNotificationActive = () => {
        setNotificationActive(false);
    }

    return (
        <TweetContainer>
            <TweetWrapper>
                <UserAvatar src={avatar} />
                <TweetContentWrapper>
                    <TweetText onChange={handleTextChange} value={tweetText} placeholder="What’s happening" />
                    <TweetActionsWrapper>
                        <FileInputWrapper>
                            <FileInput type="file" id="fileInput" accept="image/jpg" onChange={handleImageChange} />
                            <FileInputLabel htmlFor="fileInput">
                                <InputIcon src={image} alt="File Icon" />
                                {imageName || 'Choose a file'}
                            </FileInputLabel>
                        </FileInputWrapper>
                        <TweetAddButton disabled={!tweetText} onClick={sendTweet}>Tweet</TweetAddButton>
                    </TweetActionsWrapper>
                </TweetContentWrapper>
            </TweetWrapper>
            {isNotificationActive && <Notification
                isError={false}
                active={isNotificationActive}
                handleNotificationActive={handleNotificationActive}
                label="Successfully!"
                message={"New tweet has been added"} />}
        </TweetContainer>
    )
}

export default NewTweet;