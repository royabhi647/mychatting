import { Chat, DotsThreeCircle, Shapes, SignOut, UserCircle, Users } from "@phosphor-icons/react";
import React, { useState } from "react";
import DarkModeSwitcher from "../../components/DarkModeSwitcher";

const NAVIGATION = [
  {
    key: 0,
    title: "DMs",
    icon: <Chat size={24} />
  },
  {
    key: 1,
    title: "Groups",
    icon: <Users size={24} />
  },
  {
    key: 2,
    title: "Profile",
    icon: <UserCircle size={24} />
  },
  {
    key: 3,
    title: "More",
    icon: <DotsThreeCircle size={24} />
  }
]

function Sidebar() {
  const [selected, setSelected] = useState(0);

  const handleClick = (key) => {
    setSelected(key);
  }

  return (
    <div
      className={`
        flex 
        flex-col
        border-r md:border-r border-b md:border-b-0 border-stroke 
        p-3 md:p-2 
        dark:border-strokedark
        bg-white dark:bg-boxdark
        transition-all duration-300
        justify-center md:justify-between
        items-center md:items-center
        sticky top-0 md:h-screen md:sticky z-30
      `}
    >

      {/* Chat Icon */}

      <div className="flex flex-col items-center space-y-5">
        <div className="space-y-2 flex flex-col text-center">
          <div className="mx-auto border rounded-md border-stroke p-2 dark:border-strokedark">
            <Shapes size={24} />
          </div>
          <span className="font-medium text-sm">Workspace</span>
        </div>

        {NAVIGATION.map(({ icon, key, title }) => (
          <div
            key={key}
            className="space-y-2 flex flex-col text-center hover:cursor-pointer hover:text-primary"
            onClick={() => handleClick(key)}
          >
            <div className={`mx-auto border rounded-md border-stroke p-2 dark:border-strokedark ${selected === key && "bg-primary bg-opacity-90 text-white"} hover:border-primary dark:hover:border-primary`}>
              {icon}
            </div>
            <span className={`font-medium text-sm ${selected === key && "text-primary"}`}>{title}</span>
          </div>
        ))}
      </div>

      {/* Dark Mode Switcher */}
      <div className="flex flex-row items-center justify-center md:mb-4.5">
        <DarkModeSwitcher />
      </div>

      {/* Sign Out */}
      <div className="flex flex-row items-center justify-center md:mb-2 border rounded-md border-stroke p-2 dark:border-strokedark hover:bg-gray-100 dark:hover:bg-boxdark-2 transition cursor-pointer">
        <SignOut size={24} />
      </div>
    </div>
  );
}

export default Sidebar;