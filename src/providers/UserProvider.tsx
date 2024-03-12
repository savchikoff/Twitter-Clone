import { collection, getDocs } from "firebase/firestore";
import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";

import { auth, db } from "@/firebase";

interface ICurrentUserContext {
    uid: string;
    displayName: string;
    email: string;
    userName: string;
};

interface ICurrentUserProviderProps {
    children: ReactNode;
}

const CurrentUserContext = createContext<ICurrentUserContext>({
    uid: "",
    displayName: "",
    email: "",
    userName: ""
});

export const useCurrentUser = () => {
    return useContext(CurrentUserContext);
}

export const CurrentUserProvider: FC<ICurrentUserProviderProps> = ({ children }) => {

    const [user, setUser] = useState<ICurrentUserContext>({
        uid: "",
        displayName: "",
        email: "",
        userName: "",
    });

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                const { uid, displayName, email } = user as { uid: string; displayName: string; email: string | undefined };

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
    }, [auth]);

    return <CurrentUserContext.Provider value={user}>{children}</CurrentUserContext.Provider>
}