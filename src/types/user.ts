export type IUser = {
  _id: string;
  fullName: string;
  email: string;
  wishlist?: string[];
  readSoon?: string[];
  finishedBook?: string[];
};
