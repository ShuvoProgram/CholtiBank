import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const urlExtension = "/transactions";

export const transactionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    depositMoney: build.mutation({
      query: (data) => ({
        url: `${urlExtension}/deposit-money`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.transaction, tagTypes.user],
    }),

    withdrawMoney: build.mutation({
      query: (data) => ({
        url: `${urlExtension}/withdraw-money`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.transaction],
    }),

    transferMoney: build.mutation({
      query: (data) => ({
        url: `${urlExtension}/transfer-money`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.transaction],
    }),

    mobileRecharge: build.mutation({
      query: (data) => ({
        url: `${urlExtension}/mobile-recharge`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.transaction],
    }),

    getMyStatements: build.query({
      query: (data) => ({
        url: `${urlExtension}/get-my-statements`,
        method: "GET",
        data: data,
      }),
      providesTags: [tagTypes.transaction],
    }),
  }),
});

export const {
  useDepositMoneyMutation,
  useWithdrawMoneyMutation,
  useTransferMoneyMutation,
  useMobileRechargeMutation,
  useGetMyStatementsQuery,
} = transactionApi;
