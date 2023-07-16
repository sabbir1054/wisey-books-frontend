export type IComment = {
  fullName: string;
  feedback: string;
};

export type IBook = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews?: IComment[];
  imgUrl?: string;
};
