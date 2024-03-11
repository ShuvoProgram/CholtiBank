"use client";

import { Card, CardBody, CardHeader, Chip } from "@nextui-org/react";
import React from "react";
import CountUp from "react-countup";
import { TbCurrencyTaka } from "react-icons/tb";

export const AdminBalanceCard = ({
  count,
  title,
  icon,
  badgeTitle,
  badgeVariant,
  badgeColor,
  badgeIcon,
}: {
  count: number;
  title: string;
  icon: React.ReactNode;
  badgeTitle: string;
  badgeVariant:
    | "dot"
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | undefined;
  badgeColor:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | undefined;
  badgeIcon: React.ReactNode;
}) => {
  return (
    <Card className="xl:max-w-sm max-h-36 bg-yellow-50 dark:bg-slate-900 dark:text-white shadow-md w-full  border border-primary hover:border-secondary   transition-transform transform hover:scale-105">
      <CardHeader className="flex items-center justify-between">
        {icon}
        <Chip
          startContent={badgeIcon}
          variant={badgeVariant}
          color={badgeColor}
          classNames={{
            base: "rounded-xl bg-white ",
          }}
        >
          {badgeTitle}
        </Chip>
      </CardHeader>
      <CardBody className="">
        <div className="flex flex-col">
          <div className="font-bold text-2xl flex items-center ">
            <p>
              <TbCurrencyTaka className="text-3xl text-secondary font-bold" />
            </p>{" "}
            <CountUp end={count} />
          </div>
          <span className="font-semibold text-medium text-slate-500 dark:text-slate-200">
            {title}
          </span>
        </div>
      </CardBody>
    </Card>
  );
};
