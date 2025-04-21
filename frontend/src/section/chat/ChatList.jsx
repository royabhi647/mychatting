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
  const [selected, setSelected] = useState(0);

  return (
    <>
      <div
        className={`flex fixed inset-0 z-40 bg-white dark:bg-boxdark h-full flex-col md:flex md:static md:w-1/4 md:max-w-xs lg:max-w-sm transition-all duration-300 ease-in-out`}
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
          {List.map((object, item) => (
            <div
              className={`flex cursor-pointer items-center rounded px-4 sm:px-6 py-2 dark:hover:bg-strokedark ${selected === item ? "bg-gray dark:bg-boxdark-2" : "hover:bg-gray-2 dark:hover:bg-boxdark-2/90"}`}
              key={item}
              onClick={() => {
                setSelected(item)
              }}
            >
              <div className="relative mr-3 h-10 w-10 sm:h-11 sm:w-11 rounded-full flex-shrink-0">
                <img
                  src={object.imgSrc}
                  alt={object.name}
                  className="h-full w-full rounded-full object-cover object-center"
                />
                <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full border-2 border-white dark:border-boxdark bg-success"></span>
              </div>

              <div className="w-full min-w-0">
                <h5 className="text-sm font-medium text-black dark:text-white truncate">
                  {object.name}
                </h5>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">
                  {object.message}
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