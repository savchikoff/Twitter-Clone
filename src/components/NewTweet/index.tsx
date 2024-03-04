import { FC } from "react";
import { TweetActionsWrapper, TweetAddButton, TweetContainer, TweetContentWrapper, TweetImage, TweetImageButton, TweetText, TweetWrapper, UserAvatar } from "./styled";
import avatar from "@assets/avatar.svg";
import image from "@assets/img-icon.svg"

const NewTweet: FC = () => {
    return (
        <TweetContainer>
            <TweetWrapper>
                <UserAvatar src={avatar} />
                <TweetContentWrapper>
                    <TweetText placeholder="What’s happening" />
                    <TweetActionsWrapper>
                        <TweetImageButton type="file" accept="image/jpeg,image/png" />
                        {/* <TweetImage src={image} alt="Tweet img" />
                        </TweetImageButton> */}
                        <TweetAddButton>Tweet</TweetAddButton>
                    </TweetActionsWrapper>
                </TweetContentWrapper>
            </TweetWrapper>
        </TweetContainer>
    )
}

export default NewTweet;