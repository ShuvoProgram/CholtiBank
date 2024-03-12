"use client";

import DashboardHeader from "@/components/Layout/Header/DashboardHeader";
// import { SidebarWrapper } from "@/components/Layout/sidebar/SidebarWrapper";

import React from "react";
import { RiHomeOfficeFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa6";
import { AiOutlineTransaction } from "react-icons/ai";
import { FaRegCreditCard } from "react-icons/fa";
import { RiBriefcase4Fill } from "react-icons/ri";
import { CiCreditCard1 } from "react-icons/ci";
import { SidebarWrapper } from "@/components/Layout/Sidebar/SidebarWrapper";
const AdminDashboardLayout = ({ children }: { children: React.ReactNode }) => {

  // menuItems.js

 const adminMenuItems = [
  {
    title: "Home",
    icon: <RiHomeOfficeFill />,
    path: "/dashboard/admin",
  },
  {
    title: "Customers",
    icon: <FaUsers />,
    path: "/dashboard/admin/users",
  },
  {
    title: "All Transactions",
    icon: <AiOutlineTransaction />,
    path: "/dashboard/admin/transactions",
  },
  // {
  //   title: "Cards Issues",
  //   icon: <FaRegCreditCard />,
  //   items: [
  //     { title: "Cholti Plus", icon: <CiCreditCard1 />, path: "#" },
  //     { title: "Cholti Gold", icon: <CiCreditCard1 />, path: "#" },
  //     { title: "Visa", icon: <CiCreditCard1 />, path: "#" },
  //   ],
  // },
  // {
  //   title: "Loan Officers",
  //   icon: <RiBriefcase4Fill />,
  //   path: "/dashboard/admin/loan-officers",
  // },
  // Add more menu items as needed
];


  return (
    <>
      <section className="flex mx-auto max-w-screen-2xl ">
      <SidebarWrapper menuItems={adminMenuItems} />
        <DashboardHeader>{children}</DashboardHeader>
      </section>
    </>
  );
};

export default AdminDashboardLayout;
