import { FC } from "react";
import { UserAvatar } from "@/components/Sidebar/styled";
import { IUserProps } from "./interfaces";
import { FollowButton, UserData, UserDataWrapper, UserName, UserNickName, UsersInfoWrapper } from "./styled";
import avatar from "@assets/avatar.svg";

const User: FC<IUserProps> = ({ userName, nickName }) => {



    return (
        <UsersInfoWrapper>
            <UsersInfoWrapper>
                <UserDataWrapper>
                    <UserAvatar src={avatar} />
                    <UserData>
                        <UserName>{userName}</UserName>
                        <UserNickName>@{nickName}</UserNickName>
                    </UserData>
                </UserDataWrapper>
                <FollowButton>Follow</FollowButton>
            </UsersInfoWrapper>
        </UsersInfoWrapper>
    )
}

export default User;