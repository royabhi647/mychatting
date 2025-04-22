import React from "react";
import { ChatList, MessageInbox, Sidebar } from "../section/chat";
import GifModal from "../components/GifModal";

function Messages() {
  return (
    <div className="h-screen overflow-hidden">
      <div className="h-full rounded-sm border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark md:flex">
        {/* Sidebar */}
        <Sidebar />

        {/* ChatList */}
        <ChatList />

        {/* Inbox */}
        <MessageInbox />
      </div>

      <GifModal />
    </div>
  )
}

export default Messages;
