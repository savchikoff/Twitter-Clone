import SectionWrapper from "../SectionWrapper";
import LinkWrapper from "@/ui/LinkWrapper";
import NewTweet from "../NewTweet";
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

const Profile = () => {
    return (
        <SectionWrapper>
            <ProfileHeader>
                <ProfileHeaderName>Bobur</ProfileHeaderName>
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
                    <UserName>Bobur</UserName>
                    <UserNickname>@bobur_mavlonov</UserNickname>
                </UserInfo>
                <ProfileDescription>
                    UX&UI designer at <LinkWrapper>@abutechuz</LinkWrapper>
                </ProfileDescription>
                <SubscriptionsWrapper>
                    <FollowersInfo><Strong>67</Strong> Following</FollowersInfo>
                    <FollowingInfo><Strong>47</Strong> Followers</FollowingInfo>
                </SubscriptionsWrapper>
            </ProfileInfoWrapper>
            <NewTweet />
        </SectionWrapper>
    )
}

export default Profile;