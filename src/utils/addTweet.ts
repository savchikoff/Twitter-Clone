import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

import { db, storage } from "@/firebase";

export type FileType = Blob | Uint8Array | ArrayBuffer | null;

export const addImage = async (file: FileType, id: string) => {
    const imgId = id + new Date().getMilliseconds();
    const fileName = `images/${imgId}.jpg`;
    const fileRef = ref(storage, fileName);

    if (!file) return null;

    try {
        await uploadBytes(fileRef, file);
    } catch (e) {
        console.error(e);
    }
    return fileName;
}

export const addTweet = async (text: string, name: string, userName: string, email: string, image: FileType, id: string) => {
    const fileName = await addImage(image, id);
    const tweetContent = {
        text,
        name,
        userName,
        email,
        image: fileName,
        likes: 0,
        createdAt: new Date(),
        likedUsers: [],
        id
    };

    try {
        await addDoc(collection(db, "Tweets"), tweetContent);
        location.reload();
    } catch (e) {
        console.error(e);
    }
};
