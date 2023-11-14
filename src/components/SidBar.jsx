import React from "react";
import { CiBank } from "react-icons/ci";
import { FaHandHoldingUsd, FaUserTie } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa6";
import { IoMdHammer } from "react-icons/io";
import { LuContact2 } from "react-icons/lu";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { PiFiles, PiNotificationLight, PiUsersThreeLight } from "react-icons/pi";
import { TbListCheck, TbMessages, TbPencilOff } from "react-icons/tb";

const MenuList = [
  {
    id: 1,
    title: "Dashboard",
    icon: <MdOutlineDashboardCustomize />,
  },
  {
    id: 2,
    title: "Lawyers",
    icon: <FaUserTie />,
  },
  {
    id: 3,
    title: "Total Users",
    icon: <PiUsersThreeLight />,
  },
  {
    id: 4,
    title: "Cases",
    icon: <IoMdHammer />,
  },
  {
    id: 5,
    title: "Departments",
    icon: <CiBank />,
  },
  {
    id: 6,
    title: "Notification",
    icon: <PiNotificationLight />,
  },
  {
    id: 7,
    title: "Meetings",
    icon: <LuContact2 />,
  },
  {
    id: 8,
    title: "Bookings",
    icon: <FaBusinessTime />,
  },
  {
    id: 9,
    title: "Services",
    icon: <FaHandHoldingUsd />,
  },
  {
    id: 10,
    title: "Banners",
    icon: <FaHandHoldingUsd />,
  },
  {
    id: 11,
    title: "All Files",
    icon: <PiFiles />,
  },
  {
    id: 12,
    title: "To-Do List",
    icon: <TbListCheck />,
  },
  {
    id: 13,
    title: "Permissions",
    icon: <TbPencilOff />,
  },
  {
    id: 14,
    title: "Messages",
    icon: <TbMessages />,
  },
];

const SidBar = () => {
  return (
    <>
      <h1 className="text-center mb-10">Admin</h1>
      {/* <div className="sidebar-item">
        <PiUsersThreeLight className="icon1" />
        <span className="text">Dashboard</span>
      </div> */}
      {MenuList.map((menuItem) => (
        <div className="sidebar-item mb-10" key={menuItem.id}>
          {React.cloneElement(menuItem.icon, { className: "icon1 icon1-style" })}

          <span className="text style-text">{menuItem.title}</span>
        </div>
      ))}
    </>
  );
};

export default SidBar;
