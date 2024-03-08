import heatImage from "@assets/profile-header.jpg";
import profileImg from "@assets/profile-image.png";
import { FC } from "react";

import LinkWrapper from "@/ui/LinkWrapper";
import { getUserTweets } from "@/utils/getUserTweets";

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

export interface IProfileHeadProps {
    displayName: string;
    userName: string;
}

const ProfileHead: FC<IProfileHeadProps> = ({ displayName, userName }) => {
    return (
        <>
            <ProfileHeader>
                <ProfileHeaderName>{displayName}</ProfileHeaderName>
                <ProfileHeaderTweets>{getUserTweets().length} Tweets</ProfileHeaderTweets>
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
        </>
    )
}

export default ProfileHead;