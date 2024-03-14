import { FC, useEffect, useState } from "react";

import heatImage from "@/assets/profile-header.jpg";
import profileImg from "@/assets/profile-image.png";
import LinkWrapper from "@/ui/LinkWrapper";
import { useUserTweets } from "@/utils/getUserTweets";

import { IProfileHeadProps } from "./interfaces";
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

const ProfileHead: FC<IProfileHeadProps> = ({ displayName, userName, isGoogle, handleModalOpen }) => {

    return (
        <>
            <ProfileHeader>
                <ProfileHeaderName>{displayName}</ProfileHeaderName>
                <ProfileHeaderTweets>{useUserTweets().length} Tweets</ProfileHeaderTweets>
            </ProfileHeader>
            <ProfileHeat>
                <ProfileHeatImage src={heatImage} />
            </ProfileHeat>
            <ProfileInfoWrapper>
                <TopInfoWrapper>
                    <ProfileImage src={profileImg} alt="Profile img" />
                    <EditButton $isGoogle={isGoogle} onClick={handleModalOpen}>Edit profile</EditButton>
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