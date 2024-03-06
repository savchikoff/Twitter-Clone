import { FC, ReactNode, createContext, useContext, useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { auth, db } from "@/firebase";

interface ICurrentUserContext {
    uid?: string | null;
    displayName?: string | null;
    userName?: string | null;
};

interface ICurrentUserProviderProps {
    children: ReactNode;
}

const CurrentUserContext = createContext<ICurrentUserContext>({
    uid: undefined,
    displayName: undefined,
    userName: undefined,
});

export const useCurrentUser = () => {
    return useContext(CurrentUserContext);
}

export const CurrentUserProvider: FC<ICurrentUserProviderProps> = ({ children }) => {

    const [user, setUser] = useState<ICurrentUserContext>({
        uid: undefined,
        displayName: undefined,
        userName: undefined
    });

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                const { uid, displayName, email } = user;

                console.log(uid);


                if (!displayName) {
                    const userRef = collection(db, "Users");
                    const userSnaps = await getDocs(userRef);

                    userSnaps.forEach((userSnap) => {
                        if (userSnap.exists() && userSnap.data().uid === uid) {
                            const { name, email } = userSnap.data();
                            setUser({ uid, displayName: name, userName: email?.split("@")[0] });
                        }
                    });
                } else {
                    setUser({ uid, displayName, userName: email?.split("@")[0] });
                }
            } else {
                setUser({
                    uid: null,
                    displayName: null,
                    userName: null
                });
            }
        });

        return () => unsubscribe();
    }, [auth]);

    return <CurrentUserContext.Provider value={user}>{children}</CurrentUserContext.Provider>
}