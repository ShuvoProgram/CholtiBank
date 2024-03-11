import React from "react";

import { FaRegCreditCard } from "react-icons/fa";
import { FiCreditCard } from "react-icons/fi";
import { FaCreditCard } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa6";
import { Button } from "@nextui-org/react";
import { MdOutlineMore } from "react-icons/md";
import { CiCreditCard2 } from "react-icons/ci";
import OutlineButton from "@/components/UI Elements/Button/OutlineButton";
const CardBenefits = () => {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl  font-black mb-5 uppercase ">
        Unlock Exclusive Benefits with Our
        <span className="text-primary"> CholtiBank </span>
        Cards
      </h1>
      <p className="leading-relaxed  text-slate-900 dark:text-slate-50 text-justify">
        {
          "Experience a new level of financial freedom with our range of cutting-edge digital bank cards. Whether you're looking for seamless transactions, enhanced security features, or exciting rewards, our cards have you covered."
        }
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 my-3">
        <div className="flex items-center gap-x-2 mb-2">
          <FiCreditCard className="text-xl md:text-2xl  text-zinc-900" />
          <p className="font-semibold text-sm md:text-base">Cholti Regular</p>
        </div>
        <div className="flex items-center gap-x-2 mb-2">
          <CiCreditCard2 className="text-xl md:text-2xl  text-green-500" />
          <p className="font-semibold text-sm md:text-base">Cholti Plus</p>
        </div>
        <div className="flex items-center gap-x-2 mb-2">
          <FaRegCreditCard className="text-xl md:text-2xl  text-yellow-500" />
          <p className="font-semibold text-sm md:text-base">Cholti Gold</p>
        </div>
        <div className="flex items-center gap-x-2 mb-2">
          <FaCreditCard className="text-xl md:text-2xl  text-green-600" />
          <p className="font-semibold text-sm md:text-base">Cholti Premium</p>
        </div>
        <div className="flex items-center gap-x-2 mb-2">
          <FaCcVisa className="text-xl md:text-2xl  text-blue-600" />
          <p className="font-semibold text-sm md:text-base">Visa Card</p>
        </div>
        <div className="flex items-center gap-x-2 mb-2">
          <FaCcMastercard className="text-xl md:text-2xl  text-rose-600" />
          <p className="font-semibold text-sm md:text-base">Master Card</p>
        </div>
      </div>

      <OutlineButton
        title="Learn More"
        endContent={<MdOutlineMore className="text-xl text-secondary" />}
      />
    </div>
  );
};

export default CardBenefits;
