export interface Review {
    uid: string;
    title: string;
    content: string;
    rating: number;
    username: string | null;
    useremail: string | null;
    userimage: string | null;
    isAuth: boolean;
    isEdited: false;

}