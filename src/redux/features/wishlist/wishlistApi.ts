import { api } from "../../api/ApiSlice";

const wishlistApi = api.injectEndpoints({
  endpoints: (builder) => ({

    addToWishlist: builder.mutation({
      query: (data) => ({
        url: "/users/add-wishlist",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["wishlist",],
    }),
  }),
});

export const {  useAddToWishlistMutation } = wishlistApi;
