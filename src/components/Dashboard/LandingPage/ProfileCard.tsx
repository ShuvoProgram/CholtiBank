import { formatDate } from "@/helpers/formatDate";
import { Avatar, Button, Card } from "@nextui-org/react";
import {
  FaBirthdayCake,
  FaMobileAlt,
  FaRegMoneyBillAlt,
  FaUserAlt,
} from "react-icons/fa";
import { IoMdCalendar } from "react-icons/io";
import { FaRegEnvelope } from "react-icons/fa";
import { BsGenderMale } from "react-icons/bs";
import { BsGenderFemale } from "react-icons/bs";
import { PiOfficeChairBold } from "react-icons/pi";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

const ProfileCard = ({ user }: { user: any }) => {
  const {
    firstName,
    lastName,
    phoneNumber,
    userFinancialInfo,
    createdAt,
    personalInfo,
  } = user;

  const { accountNumber, accountBalance, accountType, currency } =
    userFinancialInfo || {};

  const { dateOfBirth, gender, nationality, email, occupation } =
    personalInfo || {};

  return (
    <Card className=" bg-yellow-50 dark:bg-slate-900 dark:text-white shadow-md w-full  border border-primary hover:border-secondary   transition-transform transform hover:scale-105 p-4">
      <div className="mt-4 flex items-center justify-center">
        <div>
          <Avatar src="/user.jpg" className="w-20 h-20 text-large" />
          <div>
            <p className="font-bold text-lg">{`${firstName || ""} ${
              lastName || ""
            }`}</p>
            <p className="text-gray-500 text-center">
              {" "}
              {accountType === "current" ? "Current" : "Savings"}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-x-1">
        <FaRegMoneyBillAlt className=" text-lg md:text-xl text-secondary mr-2" />
        <p className="font-semibold">Account Number: </p>
        <p className="text-gray-600 dark:text-grey-100 text-xs md:text-base">{accountNumber || ""}</p>
      </div>

      <div className="flex items-center  gap-x-1">
        <IoMdCalendar className=" text-lg md:text-xl text-secondary mr-2" />
        <p className="font-semibold">Opening Date: </p>
        <p className="">
          {createdAt ? formatDate(createdAt, "MMMM dd, yyyy") : ""}
        </p>
      </div>

      <div className="flex items-center gap-x-1">
        <FaMobileAlt className=" text-lg md:text-xl text-secondary mr-2" />
        <p className="font-semibold">Phone Number: </p>
        <p className="text-gray-600 dark:text-grey-100 text-xs md:text-base">{phoneNumber || ""}</p>
      </div>

      <div className="flex items-center gap-x-1">
        <FaBirthdayCake className=" text-lg md:text-xl text-secondary mr-2" />
        <p className="font-semibold">Date of Birth: </p>
        <p className="text-gray-600 dark:text-grey-100 text-xs md:text-base">
          {dateOfBirth ? formatDate(dateOfBirth, "MMMM dd, yyyy") : ""}
        </p>
      </div>

      <div className="flex items-center gap-x-1">
        <FaRegEnvelope className=" text-lg md:text-xl text-secondary mr-2" />
        <p className="font-semibold">Email: </p>
        <p className="text-gray-600 dark:text-grey-100 text-xs md:text-base">{email || ""}</p>
      </div>

      <div className="flex items-center gap-x-1">
        {gender === "Female" ? (
          <BsGenderFemale className=" text-lg md:text-xl text-secondary mr-2" />
        ) : (
          <BsGenderMale className=" text-lg md:text-xl text-secondary mr-2" />
        )}

        <p className="font-semibold">Gender: </p>
        <p className="text-gray-600 dark:text-grey-100 text-xs md:text-base">{gender || ""}</p>
      </div>

      <div className="flex items-center gap-x-1">
        <PiOfficeChairBold className=" text-lg md:text-xl text-secondary mr-2" />
        <p className="font-semibold">Occupation: </p>
        <p className="text-gray-600 dark:text-grey-100 text-xs md:text-base">{occupation || ""}</p>
      </div>
      <Link
        href={"/dashboard/user/profile"}
        className="flex justify-center items-center mt-4"
      >
        <Button
          variant="bordered"
          color="secondary"
          size="sm"
          endContent={<FaExternalLinkAlt />}
        >
          View more
        </Button>
      </Link>
    </Card>
  );
};

export default ProfileCard;
