export interface PostingType {
  id: number;
  who_post: string;
  content: string;
  image: string;
  created_at: string;
  Comments: string;
}

export interface UserType {
  id?: number;
  username?: string;
  photo?: string;
}
