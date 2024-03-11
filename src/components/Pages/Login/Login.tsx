"use client";

import { Button } from "@nextui-org/react";
import { IoEyeOffSharp } from "react-icons/io5";
import { GiBleedingEye } from "react-icons/gi";
import { useEffect, useState } from "react";
import { TbPasswordFingerprint } from "react-icons/tb";
import { MdPhonelinkLock } from "react-icons/md";
import { BiSolidLogIn } from "react-icons/bi";
import { useUserLoginMutation } from "@/redux/api/authApi";
import LoadingPage from "@/app/loading";
import { IJwtDecoded } from "@/types/user";
import { getUserInfo, storeUserInfo } from "@/services/auth.services";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import ReusableInput from "@/components/Forms/ReusableInput";
import FriendlyCaptcha from "@/components/Forms/captcha/FriendlyCaptcha";
const Login = () => {
  const [userLogin, { isLoading }] = useUserLoginMutation();
  const [isVisible, setIsVisible] = useState(false);
  const [captchaCode, setCaptchaCode] = useState("");

  const router = useRouter();
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [errorMessage, setErrorMessage] = useState("");
  const { role } = getUserInfo() as IJwtDecoded;

  useEffect(() => {
    if (role) {
      router.push(`/dashboard/${role}`);
    }
  }, [role, router]);

  const loginHandler = async (e: any) => {
    e.preventDefault();
    const phoneNumber = e.target.phone.value;
    const password = e.target.password.value;
    const data = {
      phoneNumber,
      password,
    };

    if (!captchaCode) {
      return setErrorMessage("Complete the captcha first");
    }

    try {
      const response = await userLogin(data).unwrap();
      if (response?.data) {
        storeUserInfo(response?.data);
        toast.success(`${response?.message}`);
        if (isLoading) {
          return <LoadingPage />;
        }

        router.push(`/dashboard/${role}`);
      }
    } catch (error: any) {
      if (error?.data?.message) {
        setErrorMessage(error?.data?.message);
        // toast.error(error?.data?.message);
      }
    }
  };

  return (
    <>
      <form onSubmit={loginHandler} className="flex flex-col gap-y-2 p-5">
        <div className=" mb-2">
          <h1 className="text-secondary text-xl font-bold text-center">
            Login
          </h1>
        </div>
        <ReusableInput
          label="Phone"
          name="phone"
          placeholder="01XXXXXXXXX"
          type={"text"}
          startContent={
            <MdPhonelinkLock className="text-lg text-default-400  flex-shrink-0" />
          }
          isRequired={true}
          isInvalid={errorMessage ? true : false}
        />

        <ReusableInput
          label="Password"
          name="password"
          placeholder="********"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <GiBleedingEye className="text-lg text-default-400 " />
              ) : (
                <IoEyeOffSharp className="text-lg text-default-400 " />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          startContent={
            <TbPasswordFingerprint className="text-lg text-default-400 " />
          }
          isRequired={true}
          isInvalid={errorMessage ? true : false}
          errorMessage={errorMessage}
        />
        <FriendlyCaptcha setCaptchaCode={setCaptchaCode} />
        <Button
          type="submit"
          className="text-white w-full"
          color="secondary"
          startContent={<BiSolidLogIn className="text-lg " />}
          fullWidth={true}
          radius="none"
        >
          Login
        </Button>
      </form>
    </>
  );
};

export default Login;
