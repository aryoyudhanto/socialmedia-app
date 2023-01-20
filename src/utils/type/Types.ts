export interface PostingType {
  id: number;
  who_post: string;
  content: string;
  image: string;
  created_at: string;
  Comments: string;
  photo: string
}

export interface UserType {
  id?: number;
  username?: string;
  photo?: string;
}
export interface ProfileType {
  id?: number;
  name?: string;
  email?: string;
  username?: string;
  photo?: string;
  date_of_birth?: string;
  phone_number?: string;
  about_me?: string;
  Comments?: CommentsType[]
}

export interface ProfileTypes {
  id?: number,
  name?: string,
  email?: string,
  username?: string,
  photo?: any,
  date_of_birth?: string,
  phone_number?: string,
  about_me?: string,
  password?: string,
}
export interface CommentsType {
  comentator?: string
  created_at?: string
  id: number
  id_post?: number
  text?: string
}
export interface showType {
  id?: number;
  user_id?: number;
  image?: string;
  who_post?: string;
  content?: string;
  created_at?: string;
}