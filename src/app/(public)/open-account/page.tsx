"use client";

import OpenAccount from "@/components/Pages/OpenAccount/OpenAccount";
// OpenAccountPage.tsx
import { Button, Divider, Input } from "@nextui-org/react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

const OpenAccountPage = () => {

  


  return (
    <div className=" max-w-xs sm:max-w-md mx-auto px-4">
      <div className=" mt-10 lg:mt-16  border-2 border-slate-500 min-h-fit ">
        <div className=" flex justify-between items-center px-5 py-3">
          <h1 className="text-primary text-2xl font-bold ">CholtiBank</h1>

          <Link href={"/"}>
            {" "}
            <Button
              isIconOnly
              startContent={<FaHome className="text-3xl text-secondary" />}
              variant="faded"
            ></Button>
          </Link>
        </div>
        <Divider className="bg-slate-500  pb-0.5" />
        <OpenAccount />
        <div className="my-2">
          <p className="text-center text-slate-500 text-wrap">
            {" Already have an account? "}
            <Link href={"/login"} className="text-secondary font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OpenAccountPage;
