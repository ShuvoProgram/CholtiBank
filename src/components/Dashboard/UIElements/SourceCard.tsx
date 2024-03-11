import { Button, Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SourceCard = ({
  data,
  source,
  setSource,
  onOpen,
}: {
  data: any;
  source: string;
  setSource: any;

  onOpen: any;
}) => {
  const handleClick = () => {
    setSource(data?.id);
    onOpen();
  };

  return (
    <button
      onClick={handleClick}
      className="block xl:max-w-sm  bg-yellow-50 dark:bg-slate-900 dark:text-white shadow-md  border border-primary hover:border-secondary   transition-transform transform hover:scale-105 p-5  lg:p-10"
    >
      <div className="flex  justify-center items-center">
        {data?.image && (
          <Image src={data?.image} alt="icon" width={100} height={100} />
        )}
        {data?.icon && <p> {data?.icon}</p>}
      </div>
      <h3 className="mt-2 text-center font-semibold">{data?.title}</h3>
    </button>
  );
};

export default SourceCard;
