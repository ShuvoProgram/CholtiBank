"use client";
import React, { useEffect, useState } from "react";
import { MdMenu, MdOutlineMailOutline } from "react-icons/md";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
  DropdownItem,
  Badge,
  Card,
  ButtonGroup,
} from "@nextui-org/react";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { ThemeSwitcher } from "@/components/Utility/ThemeSwitcher";
import notifications from "@/constants/notifications";
import { formatTimestamp } from "@/utils/formatTimeStamp";
import messages from "@/constants/message";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setCollapsed } from "@/redux/slices/sidebarSlice";
import { useRouter } from "next/navigation";
import { getUserInfo, removeUserInfo } from "@/services/auth.services";
import { IJwtDecoded } from "@/types/user";
import { authKey } from "@/constants/storageKeys";
import ThemeWiseImageLoader from "@/components/Utility/ThemeWiseImageLoader";

import lightThemeLogo from "./../../../assets/Navbar/Light/choltiBank.png";
import darkThemeLogo from "@/assets/Navbar/Dark/choltiBank_dark_1.png";


const DashboardHeader = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const dispatch = useAppDispatch();
  const { collapsed } = useAppSelector((state) => state.sidebar);

  const messageCount = messages.length; // Calculate the number of messages
  const isInvisible = messageCount === 0; // Check if there are no messages

  const notificationCount = notifications?.length;

  const router = useRouter();

  const userInfo = getUserInfo() as IJwtDecoded;

  useEffect(() => {
    if (!userInfo?.userId) {
      return router.push("/login");
    }
  }, [userInfo?.userId, router]);

  const logoutHandler = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };

  const handleOverlayClick = () => {
    dispatch(setCollapsed()); // Dispatch the action to collapse the sidebar
  };
  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className=""
        maxWidth="2xl"
      >
        <NavbarContent className="block sm:hidden m-0 p-0" justify="start">
          {/* <NavbarItem> */}
          <Button
            className="sm:hidden"
            isIconOnly
            variant="light"
            startContent={<MdMenu className="text-CSecondary text-2xl" />}
            onClick={handleOverlayClick} // Click event to collapse the sidebar
          ></Button>
          {/* </NavbarItem> */}
        </NavbarContent>
        {/* Mobile screen logo */}
        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand className="flex gap-8 items-center px-6">
          <Link href={"/"}>
          <ThemeWiseImageLoader
              srcLight={lightThemeLogo}
              srcDark={darkThemeLogo}
              alt="logo"
              width={150}
              height={35}
            />
          </Link>
          </NavbarBrand>
        </NavbarContent>

        {/* lg screen logo */}

        <NavbarContent justify="end" className="m-0 p-0">
          <ButtonGroup size="lg">
            <NavbarItem>
              <ThemeSwitcher />
            </NavbarItem>

            <NavbarItem>
              <Dropdown placement="bottom-end" backdrop="blur" className="w-80">
                <DropdownTrigger>
                  <Button size="md" variant="light" isIconOnly>
                    <Badge
                      color="danger"
                      content={messageCount}
                      isInvisible={isInvisible}
                      shape="circle"
                    >
                      <MdOutlineMailOutline className="text-3xl" />
                    </Badge>
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Message Actions" variant="flat">
                  {messages.map((message) => (
                    <DropdownItem
                      key={message.id}
                      className={``}
                      variant="shadow"
                      color="primary"
                      showDivider={true}
                    >
                      <div className="message-content hover:text-white p-2">
                        <p className="message-message text-wrap">
                          {message.message}
                        </p>
                        <p className="message-timestamp">
                          {formatTimestamp(message.timestamp)}
                        </p>
                      </div>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>

            <NavbarItem>
              <Dropdown placement="bottom-end" backdrop="blur" className="w-80">
                <DropdownTrigger>
                  <Button className="" size="md" variant="light" isIconOnly>
                    <Badge
                      color="danger"
                      content={notificationCount}
                      isInvisible={isInvisible}
                      shape="circle"
                    >
                      <MdOutlineNotificationsActive className="text-3xl " />
                    </Badge>
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  {notifications.map((notification) => (
                    <DropdownItem
                      key={notification.id}
                      className={` `}
                      variant="shadow"
                      color="primary"
                      showDivider={true}
                    >
                      <div className="notification-content hover:text-white  p-2">
                        <p className="notification-message text-wrap">
                          {notification.message}
                        </p>
                        <p className="notification-timestamp">
                          {formatTimestamp(notification.timestamp)}
                        </p>
                      </div>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
          </ButtonGroup>
          <NavbarItem>
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  src="/user.jpg"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Account No:</p>
                  <p className="font-semibold">5880 3384 3383 3838</p>
                </DropdownItem>

                <DropdownItem key="help_and_feedback">My Profile</DropdownItem>
                <DropdownItem key="logout">
                  <Button
                    variant="solid"
                    color="danger"
                    onClick={logoutHandler}
                  >
                    Log Out
                  </Button>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      {children}
    </div>
  );
};

export default DashboardHeader;
