import { api } from "../../api/ApiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: ({ page = 1, search = "", genre = "", year = "" }) =>
        `/books/?page=${page}&searchTerm=${search}&genre=${genre}&publicationYear=${year}`,
      providesTags: ["page", "searchTerm", "genre", "year", "books"],
    }),
    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    postReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/add-review/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["review"],
    }),
    getReview: builder.query({
      query: (id) => `/books/reviews/${id}`,
      providesTags: ["review"],
    }),
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    addBook: builder.mutation({
      query: (data) => ({
        url: "/books/add-book",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetReviewQuery,
  useAddBookMutation,
  useGetBooksQuery,
  useGetSingleBookQuery,
  usePostReviewMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = bookApi;
