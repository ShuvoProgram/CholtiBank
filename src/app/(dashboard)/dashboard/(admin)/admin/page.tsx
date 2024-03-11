import { AdminBalanceCard } from "@/components/Dashboard/UIElements/AdminBalanceCard";
import React from "react";
import { CgMonday } from "react-icons/cg";
import { GiMoneyStack } from "react-icons/gi";

const AdminPage = () => {
  const balance = 23993;

  return (
    <div className="min-h-svh p-4 lg:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AdminBalanceCard
              count={balance}
              title={"Current Balance"}
              icon={
                <GiMoneyStack className="text-4xl text-secondary hover:text-primary dark:text-white " />
              }
              badgeTitle={"Month"}
              badgeVariant={"faded"}
              badgeColor={"success"}
              badgeIcon={<CgMonday size={15} />}
            />
          </div>
        </div>
        <div></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-10">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default AdminPage;
