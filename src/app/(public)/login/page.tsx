import { FaHome } from "react-icons/fa";

import Link from "next/link";
import Login from "@/components/Pages/Login/Login";
import { Button, Divider } from "@nextui-org/react";
const LoginPage = () => {
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
        <Login />

        <div className="my-2">
          <p className="text-center text-slate-500 text-wrap">
            {" Don't have an account? "}
            <Link href={"/open-account"} className="text-secondary font-bold">
              Open an Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
