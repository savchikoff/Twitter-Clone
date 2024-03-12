export interface ITweetProps {
    tweetId: string;
    name: string;
    userName: string;
    likedUsers: string[];
    text: string;
    likes: number;
    createdAt: string;
    image?: string;
    id: string;
}