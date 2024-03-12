
import React from "react";
import { clsx } from 'clsx';
import Link from "next/link";
import { useAppDispatch } from "@/redux/hooks";
import { setCollapsed } from "@/redux/slices/sidebarSlice";

interface Props {
  title: string;
  icon: React.ReactNode;
  isActive?: boolean;
  href?: string;
}

export const SidebarItem = ({ icon, title, isActive, href = "" }: Props) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (window.innerWidth < 768) {
      dispatch(setCollapsed());
    }
  };
  return (
    <Link
      href={href}
      className="text-default-900 active:bg-none max-w-full"
    >
      <div
        className={clsx(
          isActive
            ? "bg-gradient-to-b  from-primary-500 to-primary-800 dark:from-primary-300 dark:to-primary-100 text-white font-bold"
            : "hover:bg-default-100",
          "flex gap-1 w-full min-h-[36px] h-full items-center text-lg px-3.5 rounded- cursor-pointer transition-all duration-150 active:scale-[0.98]"
        )}
        onClick={handleClick}
      >
        {icon}
        <span className={clsx(
          isActive
            ? "bg-gradient-to-b  from-primary-500 to-primary-800 dark:from-primary-300 dark:to-primary-100 text-white font-bold"
            : "hover:bg-default-100",
          " cursor-pointer "
        )}>{title}</span>
      </div>
    </Link>
  );
};
