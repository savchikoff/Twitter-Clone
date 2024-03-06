import { ChangeEvent, FC, useState } from "react";
import { FileInput, FileInputLabel, FileInputWrapper, InputIcon, TweetActionsWrapper, TweetAddButton, TweetContainer, TweetContentWrapper, TweetText, TweetWrapper, UserAvatar } from "./styled";
import avatar from "@assets/avatar.svg";
import image from "@assets/img-icon.svg";

const NewTweet: FC = () => {
    const [imageName, setImageName] = useState('');

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setImageName(file.name);
        }
    };

    return (
        <TweetContainer>
            <TweetWrapper>
                <UserAvatar src={avatar} />
                <TweetContentWrapper>
                    <TweetText placeholder="What’s happening" />
                    <TweetActionsWrapper>
                        <FileInputWrapper>
                            <FileInput type="file" id="fileInput" accept="image/png, image/jpeg, image/jpg" onChange={handleImageChange} />
                            <FileInputLabel htmlFor="fileInput">
                                <InputIcon src={image} alt="File Icon" />
                                {imageName ? imageName : 'Choose a file'}
                            </FileInputLabel>
                        </FileInputWrapper>
                        <TweetAddButton>Tweet</TweetAddButton>
                    </TweetActionsWrapper>
                </TweetContentWrapper>
            </TweetWrapper>
        </TweetContainer>
    )
}

export default NewTweet;