import React from "react";
import User01 from "../../assets/images/user/user-01.png";
import { LinkSimple, PaperPlaneTilt, Smiley, ArrowLeft } from "@phosphor-icons/react";
import Dropdown from "../../components/Dropdown";
import EmojiPicker from "../../components/EmojiPicker";

function Inbox({ onBack }) {
  return (
    <div className="flex h-full flex-col border-l border-stroke dark:border-strokedark md:w-3/4 w-full">
      {/* Chat header */}
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-stroke dark:border-strokedark px-4 sm:px-6 py-3 bg-white dark:bg-boxdark">
        <div className="flex items-center">
          {/* Back button for mobile */}
          <button
            className="mr-2 md:hidden text-black dark:text-white"
            onClick={onBack}
          >
            <ArrowLeft size={20} weight="bold" />
          </button>

          <div className="mr-3 sm:mr-4.5 h-10 w-10 sm:h-11.5 sm:w-11.5 overflow-hidden rounded-full flex-shrink-0">
            <img src={User01} alt="avatar" className="h-full w-full object-cover object-center" />
          </div>

          <div>
            <h5 className="font-medium text-black dark:text-white text-sm sm:text-base">
              Henry Dholi
            </h5>
            <p className="text-xs sm:text-sm">Reply to message</p>
          </div>
        </div>

        <div>
          <Dropdown />
        </div>
      </div>

      {/* List of messages */}
      <div className="max-h-full space-y-3 sm:space-y-3.5 overflow-auto no-scrollbar px-4 sm:px-6 py-4 sm:py-7.5 grow">
        {/* Sender message */}
        <div className="max-w-3/4 sm:max-w-100">
          <p className="mb-1 sm:mb-2.5 text-xs sm:text-sm font-medium">Andri Thomas</p>
          <div className="mb-1 sm:mb-2.5 rounded-2xl rounded-tl-none bg-gray px-3 sm:px-5 py-2 sm:py-3 dark:bg-boxdark-2">
            <p className="text-sm">I want to make an appointment tomorrow from 2:00 pm to 5:00 pm?</p>
          </div>
          <p className="text-xs">1:55pm</p>
        </div>

        {/* Receiver message */}
        <div className="max-w-3/4 sm:max-w-100 ml-auto">
          <div className="mb-1 sm:mb-2.5 rounded-2xl rounded-br-none bg-primary px-3 sm:px-5 py-2 sm:py-3">
            <p className="text-white text-sm">Hello, I will check the schedule and inform you</p>
          </div>
          <p className="text-xs text-right">1:57pm</p>
        </div>

        {/* Sender message */}
        <div className="max-w-3/4 sm:max-w-100">
          <p className="mb-1 sm:mb-2.5 text-xs sm:text-sm font-medium">Andri Thomas</p>
          <div className="mb-1 sm:mb-2.5 rounded-2xl rounded-tl-none bg-gray px-3 sm:px-5 py-2 sm:py-3 dark:bg-boxdark-2">
            <p className="text-sm">I want to make an appointment tomorrow from 2:00 pm to 5:00 pm?</p>
          </div>
          <p className="text-xs">1:55pm</p>
        </div>

        {/* Receiver message */}
        <div className="max-w-3/4 sm:max-w-100 ml-auto">
          <div className="mb-1 sm:mb-2.5 rounded-2xl rounded-br-none bg-primary px-3 sm:px-5 py-2 sm:py-3">
            <p className="text-white text-sm">Hello, I will check the schedule and inform you</p>
          </div>
          <p className="text-xs text-right">1:57pm</p>
        </div>

        {/* Sender message */}
        <div className="max-w-3/4 sm:max-w-100">
          <p className="mb-1 sm:mb-2.5 text-xs sm:text-sm font-medium">Andri Thomas</p>
          <div className="mb-1 sm:mb-2.5 rounded-2xl rounded-tl-none bg-gray px-3 sm:px-5 py-2 sm:py-3 dark:bg-boxdark-2">
            <p className="text-sm">I want to make an appointment tomorrow from 2:00 pm to 5:00 pm?</p>
          </div>
          <p className="text-xs">1:55pm</p>
        </div>

        {/* Receiver message */}
        <div className="max-w-3/4 sm:max-w-100 ml-auto">
          <div className="mb-1 sm:mb-2.5 rounded-2xl rounded-br-none bg-primary px-3 sm:px-5 py-2 sm:py-3">
            <p className="text-white text-sm">Hello, I will check the schedule and inform you</p>
          </div>
          <p className="text-xs text-right">1:57pm</p>
        </div>
      </div>

      {/* Message typing box */}
      <div className="sticky bottom-0 border-t border-stroke bg-white px-4 sm:px-6 py-3 sm:py-5 dark:border-strokedark dark:bg-boxdark">
        <form className="flex items-center justify-between space-x-2 sm:space-x-4.5">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Type something here"
              className="h-10 sm:h-13 w-full rounded-md border border-stroke bg-gray pl-3 sm:pl-5 pr-16 sm:pr-19 text-black text-sm placeholder-body outline-none focus:border-primary dark:border-strokedark dark:bg-boxdark-2 dark:text-white"
            />

            <div className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 flex items-center justify-end space-x-2 sm:space-x-4">
              <button className="hover:text-primary">
                <LinkSimple size={18} />
              </button>

              <button className="hover:text-primary">
                <EmojiPicker />
              </button>
            </div>
          </div>

          <button className="flex items-center justify-center h-10 w-10 sm:h-13 sm:w-13 rounded-md bg-primary text-white hover:bg-opacity-90 flex-shrink-0">
            <PaperPlaneTilt size={20} weight="bold" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Inbox;