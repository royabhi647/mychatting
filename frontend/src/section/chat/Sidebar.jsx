import { Chat, SignOut } from "@phosphor-icons/react";
import React, { useState } from "react";
import DarkModeSwitcher from "../../components/DarkModeSwitcher";

function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div 
      className={`
        flex 
        ${expanded ? 'flex-col md:flex-col' : 'flex-row md:flex-col'} 
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
      {/* Mobile - Horizontal Row / Desktop - Vertical Column */}
      
      {/* Chat Icon */}
      <div 
        className="mx-2 md:mx-auto md:mt-2 border rounded-md border-stroke p-2 dark:border-strokedark hover:bg-gray-100 dark:hover:bg-boxdark-2 transition cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <Chat size={24} />
      </div>

      {/* Dark Mode Switcher */}
      <div className="mx-2 md:mx-auto md:mb-4.5">
        <DarkModeSwitcher />
      </div>

      {/* Sign Out */}
      <div className="mx-2 md:mx-auto md:mb-2 border rounded-md border-stroke p-2 dark:border-strokedark hover:bg-gray-100 dark:hover:bg-boxdark-2 transition cursor-pointer">
        <SignOut size={24} />
      </div>
    </div>
  );
}

export default Sidebar;