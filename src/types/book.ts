export type IComment = {
  fullName: string;
  feedback: string;
};

export type IBook = {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews?: IComment[];
  imgUrl?: string;
};
