import React, { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import NoContent from "../NoContent/NoContent";
import PaginationMain from "../PaginationMain/PaginationMain";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStudentChats,
  fetchMentorChats,
} from "../../store/slices/chatsSlice";
import Message from "./Message/Message";
import mySocket from "../../utils/myIoSocketServer";

export default function Chats({ children, type = "student" }) {
  const dispatch = useDispatch();
  const {
    apiData: { results = [], totalPages, page: activePage },
    isInitialized,
    loading,
    error,
  } = useSelector((state) => state.chats.chatsList);
  const action = type === "mentor" ? fetchMentorChats : fetchStudentChats;

  useEffect(() => {
    if (results.length) {
      mySocket.emit("joinLopyOfRooms", { roomIds: results.map((r) => r._id) });
    }

    return function () {
      mySocket.off("joinLopyOfRooms");
    };
  }, [results]);

  useEffect(() => {
    dispatch(action());
    mySocket.on("savedMessage", function () {
      dispatch(action());
    });

    return function () {
      mySocket.off("savedMessage");
    };
  }, [dispatch, action]);

  if (!isInitialized || loading) {
    return <Skel />;
  }

  if (isInitialized && (error || !results.length)) {
    return <NoContent />;
  }

  return (
    <div className="chats-wrapper">
      <div className="chats">
        {results.map((chat, i) => (
          <Message type={type} key={i} chat={chat} />
        ))}
      </div>
      <PaginationMain
        totalPages={totalPages}
        activePage={activePage}
        pageSize={3}
        thunkAction={action}
        doInitialLoad={false}
      />
    </div>
  );
}

function Skel() {
  return <Skeleton count={5} height={100} className=" mb-3" />;
}
