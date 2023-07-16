import { api } from "../../api/ApiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (pageNo = 1) => `/books/?page=${pageNo}`,
      providesTags: ["books"],
    }),
  }),
});

export const { useGetBooksQuery } = bookApi;
