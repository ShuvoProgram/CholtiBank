"use client";
import dynamic from "next/dynamic";
import LoadingPage from "@/app/loading";
import BalanceCardsHolder from "@/components/Dashboard/LandingPage/BalanceCardsHolder";
import ProfileCard from "@/components/Dashboard/LandingPage/ProfileCard";

import { useGetMyProfileQuery } from "@/redux/api/userApi";
import { useGetMyStatementsQuery } from "@/redux/api/transactionApi";
import { TransactionCard } from "@/components/Dashboard/LandingPage/TransactionCard";

const TransactionChart = dynamic(
  () =>
    import("@/components/Dashboard/charts/TransactionChart").then(
      (mod) => mod.TransactionChart
    ),
  {
    ssr: false,
  }
);

const UserDashboard = () => {
  const { data, isLoading } = useGetMyProfileQuery(undefined);

  const { data: statementData, isLoading: statementLoading } =
    useGetMyStatementsQuery(undefined);

  if (isLoading || statementLoading) return <LoadingPage />;

  const balance = data?.data?.userFinancialInfo?.accountBalance;
  const totalDeposit = data?.data?.userFinancialInfo?.totalDeposit;
  const totalTransfer = data?.data?.userFinancialInfo?.totalTransfer;
  const totalRecharge = data?.data?.userFinancialInfo?.totalRecharge;
  const totalWithdraw = data?.data?.userFinancialInfo?.totalWithdraw;
  console.log(data);
  return (
    <div className="min-h-svh p-4 lg:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <BalanceCardsHolder
            balance={balance}
            totalDeposit={totalDeposit}
            totalTransfer={totalTransfer}
            totalRecharge={totalRecharge}
            totalWithdraw={totalWithdraw}
          />
        </div>
        <div>
          <ProfileCard user={data?.data} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-10">
        <div>
          <TransactionChart />
        </div>
        <div>
          <TransactionCard />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
