import { initializeApp } from "firebase/app";
import {
    getAuth,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
} from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
const env = import.meta.env;

const firebaseConfig = {
    apiKey: env.VITE_FIREBASE_API_KEY,
    authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: env.VITE_FIREBASE_MESSAGING_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app, "gs://twitter-clone-9ae15.appspot.com");

const logOut = () => {
    signOut(auth);
};

export {
    auth,
    db,
    storage,
    logOut
}