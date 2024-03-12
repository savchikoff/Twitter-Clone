import { useForm } from "react-hook-form";
import { NewDataForm, Input, SubmitButton } from "./styled";
import Notification from "@/ui/Notification";
import { useCurrentUser } from "@/providers/UserProvider";
import { collection, getDocs, query, updateDoc, where } from "firebase/firestore";
import { auth, db, logOut } from "@/firebase";
import { EmailAuthProvider, reauthenticateWithCredential, updateEmail, verifyBeforeUpdateEmail } from "firebase/auth";
import { FC, useEffect, useState } from "react";
import ErrorLabel from "@/ui/ErrorLabel";

interface ChangeFormInputs {
    name: string;
    phone: string;
    email: string;
    password: string;
}

const NewUserData: FC = () => {
    const { uid, email } = useCurrentUser();
    const [isNotificationActive, setNotificationActive] = useState(false);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState<string | undefined>("");
    const [label, setLabel] = useState("");

    const { register, handleSubmit, formState: { errors }, reset } = useForm<ChangeFormInputs>({ mode: "onBlur" });

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
            setIsError(false);
            setLabel("Successfully!");
            setError("User data has changed!");
            setNotificationActive(true);

            setTimeout(() => {
                location.reload();
            }, 2000);

        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
                setIsError(true);
                setError(error.message);
                setLabel("Error while changing data");
                setNotificationActive(true);
            }
        } finally {
            reset();
        }
    };

    useEffect(() => {
        if (errors?.name?.message ||
            errors?.phone?.message ||
            errors?.email?.message ||
            errors?.password?.message) {
            setIsError(true);
            setError(errors?.name?.message ||
                errors?.phone?.message ||
                errors?.email?.message ||
                errors?.password?.message);
        } else {
            setIsError(false);
            setError("");
        }
    }, [errors.name, errors.phone, errors.email, errors.password]);

    const handleNotificationActive = () => {
        setNotificationActive(false);
        setIsError(false);
        setError("");
    }


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
            {isError && !isNotificationActive && <ErrorLabel label={error} />}
            <SubmitButton type="submit">Change</SubmitButton>
            {isNotificationActive && <Notification
                isError={isError}
                active={isNotificationActive}
                handleNotificationActive={handleNotificationActive}
                label={label}
                message={error} />}
        </NewDataForm>
    )
}

export default NewUserData;