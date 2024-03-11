import {
  FaExchangeAlt,
  FaCreditCard,
  FaMoneyBillAlt,
  FaUserTie,
} from "react-icons/fa";
import { CiBank } from "react-icons/ci";
import { FaPersonBooth } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";
import { SiWebmoney } from "react-icons/si";
import { GrMoney } from "react-icons/gr";
import { SiMoneygram } from "react-icons/si";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaRegCreditCard } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";

import bkashLogo from "@/assets/icons/BKash.svg";
import nagadLogo from "@/assets/icons/nagad.svg";

import grameenPhone from "@/assets/icons/Grameenphone_Logo_GP_Logo.svg.png";
import airtel from "@/assets/icons/airtel-logo-icon.svg";
import banglalink from "@/assets/icons/banglalink-logo-vector.svg";
import taletalk from "@/assets/icons/TeleTalk-Logo.wine.svg";
import robi from "@/assets/icons/robi.svg";

export const depositTransactionTypes = [
  {
    id: "bank_transfer",

    title: "Bank Transfer",
    icon: <CiBank className="text-5xl  text-secondary" />,
  },
  {
    id: "credit_card",

    title: "Credit Card",
    icon: <FaCreditCard className="text-5xl  text-secondary" />,
  },
  {
    id: "atm",

    title: "ATM",
    icon: <FaPersonBooth className="text-5xl  text-secondary" />,
  },
  {
    id: "agent",

    title: "Agent",
    icon: <FaBuildingUser className="text-5xl  text-secondary" />,
  },
];

export const withdrawSourceTypes = [
  {
    id: "agent",

    title: "Agent",
    icon: <FaBuildingUser className="text-5xl text-secondary" />,
  },
  {
    id: "atm",

    title: "ATM",
    icon: <FaPersonBooth className="text-5xl text-secondary" />,
  },
];

export const transferSourceTypes = [
  {
    id: "Cholti_to_Cholti",
    title: "Cholti to Cholti",
    icon: <SiWebmoney className="text-5xl text-secondary" />,
  },
  {
    id: "NPSB",
    title: "NPSB",
    icon: <GrMoney className="text-5xl text-secondary" />,
  },
  {
    id: "EFT",
    title: "EFT",
    icon: <SiMoneygram className="text-5xl text-secondary" />,
  },
  {
    id: "RTGS",
    title: "RTGS",
    icon: <GiTakeMyMoney className="text-5xl text-secondary" />,
    // image:RTGS
  },
  {
    id: "Cash_by_code",
    title: "Cash by Code",
    icon: <GiTakeMyMoney className="text-5xl text-secondary" />,
  },
  {
    id: "BKash",
    title: "BKash",
    // icon: <FaExchangeAlt className="text-5xl text-secondary" />,
    image: bkashLogo,
  },
  {
    id: "Nagad",
    title: "Nagad",
    // icon: <FaExchangeAlt className="text-5xl text-secondary" />,
    image: nagadLogo,
  },
  {
    id: "Prepaid_Card",
    title: "Prepaid Card",
    icon: <FaRegCreditCard className="text-5xl text-secondary" />,
  },
  {
    id: "Binimoy",
    title: "Binimoy",
    icon: <GiReceiveMoney className="text-5xl text-secondary" />,
  },
];

export const mobileOperatorTypes = [
  {
    id: "Grameenphone",

    title: "Grameenphone",
    // icon: <FaExchangeAlt className="text-5xl  text-secondary" />,
    image: grameenPhone,
  },
  {
    id: "Robi",

    title: "Robi",
    // icon: <FaExchangeAlt className="text-5xl  text-secondary" />,
    image: robi,
  },
  {
    id: "Banglalink",

    title: "Banglalink",
    // icon: <FaExchangeAlt className="text-5xl  text-secondary" />,
    image: banglalink,
  },
  {
    id: "Airtel",

    title: "Airtel",
    // icon: <FaExchangeAlt className="text-5xl  text-secondary" />,
    image: airtel,
  },
  {
    id: "Teletalk",

    title: "Teletalk",
    // icon: <FaExchangeAlt className="text-5xl  text-secondary" />,
    image: taletalk,
  },
];

export const depositSource = [
  { label: "Bank Transfer", value: "bank_transfer" },
  { label: "Credit Card", value: "credit_card" },
  { label: "ATM", value: "atm" },
  { label: "Agent", value: "agent" },
];
