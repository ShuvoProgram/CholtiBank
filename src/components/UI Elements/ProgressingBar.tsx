"use client";
import React from "react";
import { Progress } from "@nextui-org/react";

const ProgressingBar = ({
  value,

  label,
}: {
  value: number;

  label: string;
}) => {
  return (
    <Progress
      label={label}
      aria-label="Loading..."
      value={value}
      showValueLabel={true}
      classNames={{
        track: "drop-shadow-md border border-default ",
        indicator: "bg-gradient-to-r from-yellow-500 to-amber-500",
        label: "tracking-wider font-medium text-sm",
        value: "font-semibold text-sm",
      }}
    />
  );
};

export default ProgressingBar;
