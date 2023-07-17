import { api } from "../../api/ApiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: ({ page = 1, search = "", genre = "", year = "" }) =>
        `/books/?page=${page}&searchTerm=${search}&genre=${genre}&publicationYear=${year}`,
      providesTags: ["page", "searchTerm", "genre", "year"],
    }),
    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
  }),
});

export const { useGetBooksQuery, useGetSingleBookQuery } = bookApi;
