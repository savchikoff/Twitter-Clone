import { useForm } from "react-hook-form";
import { NewDataForm, Input, SubmitButton } from "./styled";
import Notification from "@/ui/Notification";
import { useCurrentUser } from "@/providers/UserProvider";
import { collection, getDocs, query, updateDoc, where } from "firebase/firestore";
import { auth, db, logOut } from "@/firebase";
import { EmailAuthProvider, reauthenticateWithCredential, updateEmail, updatePassword, verifyBeforeUpdateEmail } from "firebase/auth";
import { FC, useEffect, useState } from "react";
import ErrorLabel from "@/ui/ErrorLabel";
import { ChangeFormInputs } from "./interfaces";


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

            if (userSnapshot.empty) {
                console.log("No matching documents.");
                return;
            }

            const userDocRef = userSnapshot.docs[0].ref;

            const fieldsToUpdateAtUsers: (keyof ChangeFormInputs)[] = [
                "name",
                "phone",
                "email",
                "password",
                "newPassword"
            ];

            console.log(data.newPassword);

            const fieldsToUpdateAtTweets: (keyof ChangeFormInputs)[] = ["email", "name"];

            const updatedDataForUsers: Partial<ChangeFormInputs> = {}
            const updatedDataForTweets: Partial<ChangeFormInputs> = {}

            fieldsToUpdateAtUsers.forEach((field) => {
                if (data[field] && field !== "password" && field != "newPassword") {
                    updatedDataForUsers[field] = data[field]
                }
            });

            fieldsToUpdateAtTweets.forEach((field) => {
                if (data[field]) {
                    updatedDataForTweets[field] = data[field]
                }
            });

            await tweetsSnapshot.forEach((doc) => {
                updateDoc(doc.ref, { ...doc.data(), ...updatedDataForTweets })
            })

            await updateDoc(userDocRef, updatedDataForUsers)
            const user = auth.currentUser;
            user?.reload();

            console.log(data.name);

            if (user && updatedDataForUsers.email) {
                const credential = EmailAuthProvider.credential(user.email!, data.password);
                await reauthenticateWithCredential(user, credential);
                if (user.email !== updatedDataForUsers.email) {
                    await verifyBeforeUpdateEmail(user, updatedDataForUsers.email);
                }
                if (user.email !== updatedDataForUsers.email) {
                    await updateEmail(user, updatedDataForUsers.email);
                }
                setTimeout(() => {
                    logOut();
                }, 2000);
            }

            if (user && data.password && data.newPassword) {
                const credential = EmailAuthProvider.credential(user.email!, data.password);
                await reauthenticateWithCredential(user, credential);
                await updatePassword(user, data.newPassword);
                setTimeout(() => {
                    logOut();
                }, 2000);
            }

            if (!fieldsToUpdateAtUsers || (data.password && data.newPassword)) {
                setIsError(false);
                setLabel("Successfully!");
                setError("User data has changed!");
                setNotificationActive(true);

            }
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
            errors?.password?.message ||
            errors?.newPassword?.message) {
            setIsError(true);
            setError(errors?.name?.message ||
                errors?.phone?.message ||
                errors?.email?.message ||
                errors?.password?.message ||
                errors?.newPassword?.message);
        } else {
            setIsError(false);
            setError("");
        }
    }, [errors.name, errors.phone, errors.email, errors.password, errors.newPassword]);

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
                placeholder="New email (needs current password)"
                {...register("email", {
                    pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: "Invalid email address"
                    }
                })}
            />
            <Input
                type='password'
                placeholder="Current password"
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
            <Input
                type='password'
                placeholder="New password (needs current password)"
                {...register("newPassword", {
                    pattern: {
                        value: /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,
                        message: "Password should contain at least one number and one special character"
                    },
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