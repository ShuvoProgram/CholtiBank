"use client";

import DashboardHeader from "@/components/Layout/Header/DashboardHeader";
import { SidebarWrapper } from "@/components/Layout/sidebar/SidebarWrapper";

import React from "react";
import { RiHomeOfficeFill } from "react-icons/ri";
import { AiOutlineTransaction } from "react-icons/ai";
import { FaRegCreditCard } from "react-icons/fa";
import { RiBriefcase4Fill } from "react-icons/ri";
import { CiCreditCard1 } from "react-icons/ci";
import { GiMoneyStack } from "react-icons/gi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { TbReportMoney } from "react-icons/tb";


const UserDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const usersMenuItems = [
    {
      title: "Home",
      icon: <RiHomeOfficeFill />,
      path: "/dashboard/user",
    },
    {
      title: "Deposit",
      icon: <FaMoneyBillTrendUp />,
      path: "/dashboard/user/deposit-money",
    },
    {
      title: "Withdraw",
      icon: <GiMoneyStack />,
      path: "/dashboard/user/withdraw-money",
    },
    {
      title: "Transfer",
      icon: <FaMoneyBillTransfer />,
      path: "/dashboard/user/transfer-money",
    },
    {
      title: "Mobile Recharge",
      icon: <FaMoneyBillTransfer />,
      path: "/dashboard/user/mobile-recharge",
    },
    {
      title: "Statements",
      icon: <TbReportMoney />,
      path: "/dashboard/user/statements",
    },
    // {
    //   title: "Cards",
    //   icon: <FaRegCreditCard />,
    //   path: "/dashboard/user/cards",
    // },
    

  ];

  return (
    <>
      <section className="flex mx-auto max-w-screen-2xl ">
        <SidebarWrapper menuItems={usersMenuItems} />
        <DashboardHeader>{children}</DashboardHeader>
      </section>
    </>
  );
};

export default UserDashboardLayout;
