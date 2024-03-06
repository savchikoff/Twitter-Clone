import User from "../User";
import { IRecommendedUsersProps, IUser } from "./interfaces";
import {
    UsersContainer,
    UsersHeader,
    UsersWrapper
} from "./styled";
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import { FC, useEffect, useState } from "react";


const RecommendedUsers: FC<IRecommendedUsersProps> = ({ searchValue }) => {
    const [users, setUsers] = useState<IUser[]>([]);

    const getUsers = async () => {
        const users: IUser[] = [];

        const userRef = collection(db, "Users");
        const userSnaps = await getDocs(userRef);

        userSnaps.forEach((userSnap) => {
            if (userSnap.exists()) {
                const { name, email, uid } = userSnap.data();
                users.push({ name, nickName: email.split("@")[0], uid })
            }
        });

        setUsers(users);
    };

    useEffect(() => {
        getUsers();
    }, []);

    const filteredUsers = users.filter((user) => user.name.toLowerCase().includes((searchValue || '').toLowerCase()));


    return (
        <UsersContainer>
            <UsersWrapper>
                <UsersHeader>You might like</UsersHeader>
                {filteredUsers.filter((_, i) => i < 2).map(({ name, nickName, uid }) => (
                    <User key={uid} userName={name} nickName={nickName} />
                ))}
            </UsersWrapper>
        </UsersContainer>
    )
}

export default RecommendedUsers;