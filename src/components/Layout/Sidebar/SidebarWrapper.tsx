"use client";
import React from "react";
import { Sidebar } from "./sidebar.styles";
import { CollapseItems } from "./collapse-items";
import { SidebarItem } from "./sidebar-item";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setCollapsed } from "@/redux/slices/sidebarSlice";
import Link from "next/link";
import ThemeWiseImageLoader from "@/components/Utility/ThemeWiseImageLoader";
export const SidebarWrapper = ({ menuItems }: { menuItems: any }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const collapsed = useAppSelector((state) => state.sidebar.collapsed);
  const pathname = usePathname();

  const handleOverlayClick = () => {
    dispatch(setCollapsed());
  };

  return (
    <div className="">
      {collapsed ? (
        <div className={Sidebar.Overlay()} onClick={handleOverlayClick} />
      ) : null}
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        <Link href={"/"} className="flex gap-8 items-center px-6">
          <ThemeWiseImageLoader
            srcLight="/choltiBank.png"
            srcDark="/choltiBank_dark_1.png"
            alt="logo"
            width={150}
            height={35}
          />
        </Link>
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-6 mt-9 px-2">
            {menuItems.map((item: any) =>
              item.items ? (
                <CollapseItems
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  items={item.items}
                />
              ) : (
                <SidebarItem
                  key={item.title}
                  title={item.title}
                  icon={item.icon}
                  isActive={pathname === item.path}
                  href={item.path}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
