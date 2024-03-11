import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const urlExtension = "/auth";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (data) => ({
        url: `${urlExtension}/login`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.auth],
    }),

    userSignUp: build.mutation({
      query: (data) => ({
        url: `${urlExtension}/signup`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.auth],
    }),
  }),
});

export const { useUserLoginMutation, useUserSignUpMutation } = authApi;
