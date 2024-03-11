import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const urlExtension = "/users";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMyProfile: build.query({
      query: (id) => ({
        url: `${urlExtension}/my-profile`,
        method: "GET",
      }),

      providesTags: [tagTypes.user, tagTypes.transaction],
    }),

    updateMyProfile: build.mutation({
      query: (id) => ({
        url: `${urlExtension}/update-my-profile/${id}`,
        method: "PATCH",
      }),

      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useGetMyProfileQuery, useUpdateMyProfileMutation } = userApi;
