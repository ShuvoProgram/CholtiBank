import {

  FaCheckCircle,
  FaInfoCircle,
  FaMobileAlt,
} from "react-icons/fa";
import {
  FiUserPlus
} from "react-icons/fi";

export const registrationStepsData = [
  {
    stepNo: 1,
    stepName: "Create an Account",
    description:
      "Click on 'Sign-Up' or 'Create Account' and provide basic information.",
    icon: <FiUserPlus className=" border border-dashed border-slate-300 rounded-full p-2 text-primary" />,
  },
  {
    stepNo: 2,
    stepName: "Verification",
    description:
      "Verify your identity by providing necessary documents and completing the required checks.",
    icon: <FaCheckCircle className=" border border-dashed border-slate-300 rounded-full p-2 text-success" />,
  },
  {
    stepNo: 3,
    stepName: "Personal Information",
    description:
      "Fill in personal details such as date of birth, address, and occupation.",
    icon: <FaInfoCircle className=" border border-dashed border-slate-300 rounded-full p-2 text-secondary" />,
  },
  {
    stepNo: 4,
    stepName: "Have your own Bank",
    description:
      "Access digital banking services after successful verification and account creation.",
    icon: <FaMobileAlt className=" border border-dashed border-slate-300 rounded-full p-2 text-pink-600" />,
  },
];
