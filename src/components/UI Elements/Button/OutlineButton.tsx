import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const OutlineButton = ({
  startContent,
  endContent,
  title,
  href,
}: {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  href?: string;
  title: string;
}) => {
  return (
    <>
      {href ? (
        <Button
          color="secondary"
          variant="bordered"
          className="hover:border-primary dark:border-yellow-300 dark:text-white font-semibold"
          endContent={endContent}
          startContent={startContent}
        >
          <Link href={href}>{title}</Link>
        </Button>
      ) : (
        <Button
          color="secondary"
          variant="bordered"
          className="hover:border-primary dark:border-yellow-300 dark:text-white font-semibold"
          endContent={endContent}
          startContent={startContent}
        >
          {title}
        </Button>
      )}
    </>
  );
};

export default OutlineButton;
