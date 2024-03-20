import { createContext, FC, useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { PropsWithChildren } from "react";

import { auth, db } from "@/config/firebase";

interface ICurrentUserContext {
    uid: string;
    displayName: string;
    email: string;
    userName: string;
};


const CurrentUserContext = createContext<ICurrentUserContext>({
    uid: "",
    displayName: "",
    email: "",
    userName: ""
});

export const useCurrentUser = () => {
    return useContext(CurrentUserContext);
}

export const CurrentUserProvider: FC<PropsWithChildren> = ({ children }) => {

    const [user, setUser] = useState<ICurrentUserContext>({
        uid: "",
        displayName: "",
        email: "",
        userName: "",
    });

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                const { uid, displayName, email } = user;

                if (!displayName) {
                    const userRef = collection(db, "Users");
                    const userSnaps = await getDocs(userRef);

                    userSnaps.forEach((userSnap) => {
                        if (userSnap.exists() && userSnap.data().uid === uid) {
                            const { name, email } = userSnap.data();
                            setUser({ uid, displayName: name, userName: email?.split("@")[0] || "", email: email || "" });
                        }
                    });
                } else {
                    setUser({ uid, displayName, userName: email?.split("@")[0] || "", email: email || "" });
                }
            } else {
                setUser({
                    uid: "",
                    displayName: "",
                    email: "",
                    userName: ""
                });
            }
        });

        return () => unsubscribe();
    }, []);

    return <CurrentUserContext.Provider value={user}>{children}</CurrentUserContext.Provider>
}