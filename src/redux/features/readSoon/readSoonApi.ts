import { api } from "../../api/ApiSlice";

const readSoonApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getReadSoon: builder.query({
      query: (id) => `/users/readSoon/${id}`,
      providesTags: ["readSoon"],
    }),
    addToReadSoon: builder.mutation({
      query: (data) => ({
        url: "/users/add-readSoon",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["readSoon"],
    }),
  }),
});

export const { useAddToReadSoonMutation, useGetReadSoonQuery } = readSoonApi;
