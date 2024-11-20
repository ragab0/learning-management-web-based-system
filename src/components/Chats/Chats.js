import React from "react";
import Skeleton from "react-loading-skeleton";
import NoContent from "../NoContent/NoContent";
import PaginationMain from "../PaginationMain/PaginationMain";
import { useSelector } from "react-redux";
import {
  fetchStudentChats,
  fetchMentorChats,
} from "../../store/slices/chatsSlice";
import Message from "./Message/Message";

export default function Chats({ children, type = "student" }) {
  const {
    apiData: { results = [], totalPages, page: activePage },
    isInitialized,
    loading,
  } = useSelector((state) => state.chats.chatsList);

  return (
    <div className="tab-chats h-100">
      {children}
      <div className="chats">
        {isInitialized && !results.length ? (
          <NoContent />
        ) : isInitialized && !loading ? (
          results.map((chat, i) => <Message type={type} key={i} chat={chat} />)
        ) : (
          <Skel />
        )}
      </div>
      <PaginationMain
        totalPages={totalPages}
        activePage={activePage}
        pageSize={3}
        thunkAction={type === "mentor" ? fetchMentorChats : fetchStudentChats}
      />
    </div>
  );
}

function Skel() {
  return <Skeleton count={5} height={100} className=" mb-3" />;
}
