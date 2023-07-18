import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-wise-gamma.vercel.app/api/v1/",
  }),
  tagTypes: ["page", "searchTerm", "genre", "year", "user", "review"],

  endpoints: () => ({}),
});
