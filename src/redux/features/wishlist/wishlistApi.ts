import { api } from "../../api/ApiSlice";

const wishlistApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getWishList: builder.query({
      query: (id) => `/users/wishlist/${id}`,
      providesTags: ["wishlist"],
    }),
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

export const { useGetWishListQuery, useAddToWishlistMutation } = wishlistApi;
