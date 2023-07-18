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
    postReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/add-review/${id}`,
        method: "PATCH",
        body: data,
        invalidatesTags: ["review"],
      }),
    }),
    updateBook: builder.mutation({
      query: ({id,data}) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
      })
    })
  }),
});

export const {
  useGetBooksQuery,
  useGetSingleBookQuery,
  usePostReviewMutation,
  useUpdateBookMutation
} = bookApi;
