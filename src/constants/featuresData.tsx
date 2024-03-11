import { MdOutlineDevices, MdSecurity, MdAttachMoney, MdTimeline,  MdReceipt, MdCreditCard, MdPeople, MdBackup, MdMonetizationOn } from "react-icons/md";

export const featuresData = [
  {
    id: "1",
    title: "Online Payment",
    description:
      "Streamline your transactions with our online payment platform. Effortlessly handle bill payments, fund transfers, and purchases securely. Enjoy the simplicity of digital transactions, ensuring convenience and peace of mind. Welcome to a hassle-free online payment experience with us.",
    icon: <MdOutlineDevices className="text-4xl dark:text-slate-100" />,
  },
  {
    id: "2",
    title: "Enhanced Security",
    description:
      "Rest easy with our advanced security measures. We prioritize the protection of your financial data, employing robust encryption and cutting-edge security protocols to ensure a secure and worry-free banking experience.",
    icon: <MdSecurity className="text-4xl dark:text-slate-100" />,
  },
  {
    id: "3",
    title: "Digital Wallet",
    description:
      "Carry your finances in your pocket with our digital wallet feature. Seamlessly manage your cards, make contactless payments, and enjoy the convenience of a secure and efficient digital financial companion.",
    icon: <MdCreditCard className="text-4xl dark:text-slate-100" />,
  },
  {
    id: "4",
    title: "Financial Planning",
    description:
      "Empower your financial journey with our comprehensive financial planning tools. Track your expenses, set savings goals, and gain insights into your financial health with user-friendly features designed to help you achieve your financial objectives.",
    icon: <MdTimeline className="text-4xl dark:text-slate-100" />,
  },
  {
    id: "5",
    title: "Automatic Backups",
    description:
      "Rest assured with automatic backups of your financial data. Our digital bank prioritizes data integrity, regularly creating secure backups to safeguard your information. Experience peace of mind knowing that your financial records are protected and easily recoverable.",
    icon: <MdBackup className="text-4xl dark:text-slate-100" />,
  },
  {
    id: "6",
    title: "E-Statements",
    description:
      "Go paperless with our electronic statements. Access your account statements conveniently through our digital platform, contributing to environmental sustainability and reducing clutter in your mailbox.",
    icon: <MdReceipt className="text-4xl dark:text-slate-100" />,
  },
  {
    id: "7",
    title: "Customer Support",
    description:
      "Experience prompt assistance with our instant customer support. Whether you have inquiries or need assistance, our dedicated support team is just a click away, ensuring a seamless and responsive customer service experience.",
    icon: <MdPeople className="text-4xl dark:text-slate-100" />,
  },

  {
    id: "8",
    title: "Investment Opportunities",
    description:
      "Explore diverse investment opportunities with our digital bank. From stocks and mutual funds to digital assets, our platform provides you with access to a range of investment options, empowering you to grow your wealth and achieve your financial goals.",
    icon: <MdMonetizationOn className="text-4xl dark:text-slate-100"  />,
  },
];
