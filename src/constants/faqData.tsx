import { FaWallet, FaMobileAlt, FaChartLine, FaUser, FaQuestionCircle } from "react-icons/fa";
import { GrShieldSecurity } from "react-icons/gr";

export const faqData = [
  {
    id: 1,
    question: "How do I deposit money into my account?",
    answer: "You can easily deposit money by logging into your account and selecting the 'Deposit' option. Choose your preferred method and follow the instructions.",
    icon: <FaWallet className="text-3xl text-amber-500" />,
  },
  {
    id: 2,
    question: "What security measures are in place for my account?",
    answer: "We prioritize your security. Your account is protected using advanced encryption technologies and multi-factor authentication for every transaction. Rest assured, your information is safe.",
    icon: <GrShieldSecurity className="text-3xl text-green-600" />,
  },
  {
    id: 3,
    question: "Is mobile banking supported?",
    answer: "Absolutely! Our mobile banking app is designed for your convenience. Download it from your app store, log in, and experience banking on the go.",
    icon: <FaMobileAlt className="text-3xl text-purple-500" />,
  },
  {
    id: 4,
    question: "How can I track my expenses and financial activities?",
    answer: "Our user-friendly dashboard provides real-time insights into your spending and financial activities. Monitor transactions, set budgets, and achieve your financial goals effortlessly.",
    icon: <FaChartLine className="text-3xl text-yellow-500" />,
  },
  {
    id: 5,
    question: "Can I manage multiple users under one account?",
    answer: "Yes, you can! Our platform supports multi-user account management. Easily add and manage users with varying access levels for a seamless banking experience.",
    icon: <FaUser className="text-3xl text-orange-500" />,
  },
  {
    id: 6,
    question: "Have more questions? Contact our support team!",
    answer: "If you have any additional questions or need assistance, feel free to reach out to our dedicated support team. We're here to help!",
    icon: <FaQuestionCircle className="text-3xl text-red-500" />,
  },
];
