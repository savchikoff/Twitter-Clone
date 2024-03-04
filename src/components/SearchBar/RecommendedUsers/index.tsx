import { UserAvatar } from "@/components/Sidebar/styled";
import random from "@assets/random-avatar.svg"
import {
    UsersContainer,
    UsersHeader,
    UsersWrapper,
    UsersInfoWrapper,
    UserWrapper,
    UserData,
    UserName,
    UserNickName,
    FollowButton,
    UserDataWrapper,
} from "./styled";

const RecommendedUsers = () => {
    return (
        <UsersContainer>
            <UsersWrapper>
                <UsersHeader>You might like</UsersHeader>
                <UsersInfoWrapper>
                    <UserWrapper>
                        <UsersInfoWrapper>
                            <UserDataWrapper>
                                <UserAvatar src={random} />
                                <UserData>
                                    <UserName>Mushtariy</UserName>
                                    <UserNickName>@Mushtar565266</UserNickName>
                                </UserData>
                            </UserDataWrapper>
                            <FollowButton>Follow</FollowButton>
                        </UsersInfoWrapper>
                    </UserWrapper>
                </UsersInfoWrapper>
                <UsersInfoWrapper>
                    <UserWrapper>
                        <UsersInfoWrapper>
                            <UserDataWrapper>
                                <UserAvatar src={random} />
                                <UserData>
                                    <UserName>Mushtariy</UserName>
                                    <UserNickName>@Mushtar565266</UserNickName>
                                </UserData>
                            </UserDataWrapper>
                            <FollowButton>Follow</FollowButton>
                        </UsersInfoWrapper>
                    </UserWrapper>
                </UsersInfoWrapper>
            </UsersWrapper>
        </UsersContainer>
    )
}

export default RecommendedUsers;