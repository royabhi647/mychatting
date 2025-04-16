import { MagnifyingGlass } from "@phosphor-icons/react";
import React, { useState } from "react";
import { X } from "@phosphor-icons/react";

import User01 from "../../assets/images/user/user-01.png";
import User02 from "../../assets/images/user/user-02.png";
import User03 from "../../assets/images/user/user-03.png";
import User04 from "../../assets/images/user/user-04.png";
import User05 from "../../assets/images/user/user-05.png";
import User06 from "../../assets/images/user/user-06.png";
import User07 from "../../assets/images/user/user-07.png";
import User08 from "../../assets/images/user/user-08.png";

const List = [
  {
    imgSrc: User01,
    name: "Henry Dholi",
    message: "I cam across your profile and...",
  },
  {
    imgSrc: User02,
    name: "Mariya Desoja",
    message: "I like your confidence 💪",
  },
  {
    imgSrc: User03,
    name: "Robert Jhon",
    message: "Can you share your offer?",
  },
  {
    imgSrc: User04,
    name: "Cody Fisher",
    message: `I'm waiting for you response!`,
  },
  {
    imgSrc: User05,
    name: "Jenny Wilson",
    message: "I cam across your profile and...",
  },
  {
    imgSrc: User06,
    name: "Robert Jhon",
    message: "Can you share your offer?",
  },
  {
    imgSrc: User07,
    name: "Cody Fisher",
    message: `I'm waiting for you response!`,
  },
  {
    imgSrc: User08,
    name: "Jenny Wilson",
    message: "I cam across your profile and...",
  },
];

function ChatList() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Mobile chat list toggle button */}
      <div className="md:hidden fixed bottom-6 left-6 z-50">
        <button 
          onClick={toggleMobileMenu}
          className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white shadow-lg"
        >
          {mobileMenuOpen ? (
            <X size={24} weight="bold" />
          ) : (
            <div className="relative">
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-danger text-xs text-white">
                {List.length}
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,128a8,8,0,0,1-8,8H128a8,8,0,0,1,0-16h88A8,8,0,0,1,224,128ZM128,72h88a8,8,0,0,0,0-16H128a8,8,0,0,0,0,16Zm88,112H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM40,136H88a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm0-64H88a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Z"></path>
              </svg>
            </div>
          )}
        </button>
      </div>

      {/* Chat list sidebar - hidden on mobile by default, shown when toggled */}
      <div 
        className={`${
          mobileMenuOpen ? 'flex fixed inset-0 z-40 bg-white dark:bg-boxdark' : 'hidden'
        } h-full flex-col md:flex md:static md:w-1/4 md:max-w-xs lg:max-w-sm transition-all duration-300 ease-in-out`}
      >
        {/* Title with close button for mobile */}
        <div className="sticky top-0 z-10 border-b border-stroke dark:border-strokedark px-6 py-5 flex flex-row justify-between items-center bg-white dark:bg-boxdark">
          <div className="flex items-center">
            <h3 className="text-lg font-medium text-black dark:text-white">
              Active Conversations
            </h3>
            <span className="rounded-md border-[.5px] border-stroke dark:border-strokedark bg-gray px-2 py-0.5 text-sm font-medium text-black dark:bg-boxdark-2 dark:text-white ml-2">
              {List.length}
            </span>
          </div>
          
          {/* Close button for mobile view */}
          <button 
            className="md:hidden text-black dark:text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        {/* Search field */}
        <div className="flex max-h-full flex-col px-4 sm:px-6 py-3">
          <form className="sticky">
            <input 
              placeholder="Search..." 
              type="text" 
              className="w-full rounded border border-stroke bg-gray-2 py-2 sm:py-2.5 pl-4 pr-10 text-sm outline-none focus:border-primary dark:border-strokedark dark:bg-boxdark-2" 
            />

            <button className="absolute right-3 top-1/2 -translate-y-1/2">
              <MagnifyingGlass size={18} />
            </button>
          </form>
        </div>

        {/* Users list */}
        <div className="no-scrollbar overflow-auto flex-grow space-y-1 sm:space-y-2">
          {List.map((user, index) => (
            <div 
              className="flex cursor-pointer items-center rounded px-4 sm:px-6 py-2 hover:bg-gray-2 dark:hover:bg-strokedark" 
              key={index}
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="relative mr-3 h-10 w-10 sm:h-11 sm:w-11 rounded-full flex-shrink-0">
                <img 
                  src={user.imgSrc} 
                  alt={user.name} 
                  className="h-full w-full rounded-full object-cover object-center" 
                />
                <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full border-2 border-white dark:border-boxdark bg-success"></span>
              </div>

              <div className="w-full min-w-0">
                <h5 className="text-sm font-medium text-black dark:text-white truncate">
                  {user.name}
                </h5>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">
                  {user.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ChatList;