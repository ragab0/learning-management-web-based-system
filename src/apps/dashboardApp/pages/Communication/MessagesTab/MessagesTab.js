import React from "react";
import Message from "../../../../../components/Message/Message";
import { messagesData } from "../../../../../data/messagesData";

export default function MessagesTab() {
  console.log(messagesData);
  return messagesData.map((msg, i) => <Message key={i} msg={msg} />);
}
