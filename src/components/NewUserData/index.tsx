import { useForm } from "react-hook-form";
import { NewDataForm, Input, SubmitButton } from "./styled";
import { useCurrentUser } from "@/providers/UserProvider";
import { collection, getDocs, query, updateDoc, where } from "firebase/firestore";
import { auth, db, logOut } from "@/firebase";
import { EmailAuthProvider, reauthenticateWithCredential, updateEmail, verifyBeforeUpdateEmail } from "firebase/auth";
import { FC } from "react";

interface ChangeFormInputs {
    name: string;
    phone: string;
    email: string;
    password: string;
}

const NewUserData: FC = () => {
    const { uid, email } = useCurrentUser();

    const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<ChangeFormInputs>();

    const handleChangeData = async (data: ChangeFormInputs) => {
        try {
            const userQuery = query(collection(db, "Users"), where("uid", "==", uid));
            const userSnapshot = await getDocs(userQuery);
            const tweetsQuery = query(collection(db, "Tweets"), where("email", "==", email));
            const tweetsSnapshot = await getDocs(tweetsQuery);

            const fieldsToUpdatesAtUsers: (keyof ChangeFormInputs)[] = [
                "name",
                "phone",
                "email",
                "password"
            ];

            const fieldsToUpdateAtTweets: (keyof ChangeFormInputs)[] = ["email", "name"];

            const updatedDataForUsers: Partial<ChangeFormInputs> = {}
            const updatedDataForTweets: Partial<ChangeFormInputs> = {}

            const userDocRef = userSnapshot.docs[0].ref;
            fieldsToUpdatesAtUsers.forEach((field) => {
                if (data[field]) {
                    updatedDataForUsers[field] = data[field]
                }
            })
            fieldsToUpdateAtTweets.forEach((field) => {
                if (data[field]) {
                    updatedDataForTweets[field] = data[field]
                }
            })

            await tweetsSnapshot.forEach((doc) => {
                updateDoc(doc.ref, { ...doc.data(), ...updatedDataForTweets })
            });

            await updateDoc(userDocRef, updatedDataForUsers)
            const user = auth.currentUser
            auth.currentUser?.reload()
            if (user !== null && updatedDataForUsers.email) {
                if (user.email === null || data.password === undefined) {
                    return
                }
                await verifyBeforeUpdateEmail(user, updatedDataForUsers.email)
                const credential = EmailAuthProvider.credential(user.email, data.password)
                await reauthenticateWithCredential(user, credential)
                await logOut()
                await updateEmail(user, updatedDataForUsers.email)
            }

        } catch (e) {
            console.error(e);
        } finally {
            reset();
        }
    };


    return (
        <NewDataForm onSubmit={handleSubmit(handleChangeData)}>
            <Input placeholder="New name"
                {...register("name", {
                    minLength: {
                        value: 2,
                        message: "Name must be more than 2 characters"
                    }
                })}
            />
            <Input placeholder="New phone"
                {...register("phone", {
                    pattern: {
                        value: /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/,
                        message: "Invalid phone number (example: +375333435866)"
                    }
                })}
            />
            <Input
                placeholder="New email"
                {...register("email", {
                    pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: "Invalid email address"
                    }
                })}
            />
            <Input
                type='password'
                placeholder="New password"
                {...register("password", {
                    minLength: {
                        value: 8,
                        message: "Password must be more than 8 characters"
                    },
                    maxLength: {
                        value: 20,
                        message: "Password must be less than 20 characters"
                    },
                })}
            />
            <SubmitButton type="submit">Change</SubmitButton>
        </NewDataForm>
    )
}

export default NewUserData;