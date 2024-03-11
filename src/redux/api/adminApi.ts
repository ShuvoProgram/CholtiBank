import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const urlExtension = "/admin";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    allTransactions: build.query({
      query: (data) => ({
        url: `${urlExtension}/all-transactions`,
        method: "GET",
        data: data,
      }),
      providesTags: [tagTypes.transaction, tagTypes.admin],
    }),

    getAllUsers: build.query({
      query: (data) => ({
        url: `${urlExtension}/get-all-users`,
        method: "GET",
        data: data,
      }),
      providesTags: [tagTypes.transaction, tagTypes.admin, tagTypes.user],
    }),

    createEmployees: build.mutation({
      query: (data) => ({
        url: `${urlExtension}/create-employees`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.admin, tagTypes.user],
    }),

    getAllEmployees: build.query({
      query: (data) => ({
        url: `${urlExtension}/get-all-employees`,
        method: "GET",
        data: data,
      }),
      providesTags: [tagTypes.admin, tagTypes.user],
    }),
  }),
});

export const {
  useAllTransactionsQuery,
  useGetAllUsersQuery,
  useGetAllEmployeesQuery,
  useCreateEmployeesMutation,
} = adminApi;
