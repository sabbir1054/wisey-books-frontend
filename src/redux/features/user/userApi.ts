/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "../../api/ApiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    userSignIn: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
    userSignUp: builder.mutation({
      query: (data) => ({
        url: "/auth/signup",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useUserSignInMutation,
  useUserSignUpMutation
} = userApi;
