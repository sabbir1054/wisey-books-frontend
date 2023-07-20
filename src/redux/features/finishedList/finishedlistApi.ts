import { api } from "../../api/ApiSlice";

const finishedApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFinishedList: builder.query({
      query: (id) => `/users/finished/${id}`,
      providesTags: ["finishedList"],
    }),
    addToFinishedList: builder.mutation({
      query: (data) => ({
        url: "/users/add-finished",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["finishedList"],
    }),
  }),
});

export const { useAddToFinishedListMutation, useGetFinishedListQuery } =
  finishedApi;
