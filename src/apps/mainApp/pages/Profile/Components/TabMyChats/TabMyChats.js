import React from "react";
import MyHeader from "../MyHeader/MyHeader";
import Chats from "../../../../../../components/Chats/Chats";
import { fetchStudentChats } from "../../../../../../store/slices/chatsSlice";

const sortOptions = [
  { name: "new", value: "date" },
  { name: "old", value: "-date" },
];

export default function TabMyChats() {
  return (
    <Chats>
      <MyHeader
        title="chats"
        sortOptions={sortOptions}
        thinkAction={fetchStudentChats}
      />
    </Chats>
  );
}
