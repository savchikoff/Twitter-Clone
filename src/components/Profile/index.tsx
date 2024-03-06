import SectionWrapper from "../SectionWrapper";
import LinkWrapper from "@/ui/LinkWrapper";
import NewTweet from "../NewTweet";
import { useCurrentUser } from "@/providers/UserProvider";
import {
    EditButton,
    FollowersInfo,
    FollowingInfo,
    ProfileDescription,
    ProfileHeader,
    ProfileHeaderName,
    ProfileHeaderTweets,
    ProfileHeat,
    ProfileHeatImage,
    ProfileImage,
    ProfileInfoWrapper,
    Strong,
    SubscriptionsWrapper,
    TopInfoWrapper,
    UserInfo,
    UserName,
    UserNickname
} from "./styled";
import heatImage from "@assets/profile-header.jpg";
import profileImg from "@assets/profile-image.png"
import Tweet from "../Tweet";

const Profile = () => {
    const { displayName, userName } = useCurrentUser();
    return (
        <SectionWrapper>
            <ProfileHeader>
                <ProfileHeaderName>{displayName}</ProfileHeaderName>
                <ProfileHeaderTweets>1,070 Tweets</ProfileHeaderTweets>
            </ProfileHeader>
            <ProfileHeat>
                <ProfileHeatImage src={heatImage} />
            </ProfileHeat>
            <ProfileInfoWrapper>
                <TopInfoWrapper>
                    <ProfileImage src={profileImg} alt="Profile img" />
                    <EditButton>Edit profile</EditButton>
                </TopInfoWrapper>
                <UserInfo>
                    <UserName>{displayName}</UserName>
                    <UserNickname>@{userName}</UserNickname>
                </UserInfo>
                <ProfileDescription>
                    Frontend Developer at <LinkWrapper>@modsen</LinkWrapper>
                </ProfileDescription>
                <SubscriptionsWrapper>
                    <FollowersInfo><Strong>67</Strong> Following</FollowersInfo>
                    <FollowingInfo><Strong>47</Strong> Followers</FollowingInfo>
                </SubscriptionsWrapper>
            </ProfileInfoWrapper>
            <NewTweet />
            <Tweet />
        </SectionWrapper>
    )
}

export default Profile;