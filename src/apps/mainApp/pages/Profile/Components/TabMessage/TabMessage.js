import React from "react";
import "./TabMessage.css";
import FilterOptions from "../FilterOptions/FilterOptions";
import { Link } from "react-router-dom";
import PaginationMain from "../../../../../../components/PaginationMain/PaginationMain";

const messagesData = [
  {
    userName: "Ronald Richards",
    avatarSrc: "",
    date: "18th March, 2024",
    content:
      "Thank you for asking your doubt, I'll send you a pdf file which cover the problems you are facing. If you have any...",
  },
  {
    userName: "Ronald Richards",
    avatarSrc: "",
    date: "18th March, 2024",
    content:
      "Thank you for asking your doubt, I'll send you a pdf file which cover the problems you are facing. If you have any...",
  },
  {
    userName: "Ronald Richards",
    avatarSrc: "",
    date: "18th March, 2024",
    content:
      "Thank you for asking your doubt, I'll send you a pdf file which cover the problems you are facing. If you have any...",
  },
  {
    userName: "Ronald Richards",
    avatarSrc: "",
    date: "18th March, 2024",
    content:
      "Thank you for asking your doubt, I'll send you a pdf file which cover the problems you are facing. If you have any...",
  },
  {
    userName: "Ronald Richards",
    avatarSrc: "",
    date: "18th March, 2024",
    content:
      "Thank you for asking your doubt, I'll send you a pdf file which cover the problems you are facing. If you have any...",
  },
  {
    userName: "Ronald Richards",
    avatarSrc: "",
    date: "18th March, 2024",
    content:
      "Thank you for asking your doubt, I'll send you a pdf file which cover the problems you are facing. If you have any...",
  },
];

export default function TabMessage() {
  return (
    <div className="tab-message">
      <header className="header col-12">
        <h2>Messages</h2>
        <FilterOptions />
      </header>
      <div className="messages">
        {messagesData.map(({ avatarSrc, userName, date, content }, i) => (
          <Link
            to={`../teachers/chat/${i}`}
            key={i}
            className="message-wrappepr"
          >
            <article className={"messageContainer"}>
              <header className={"messageHeader"}>
                <div className={"userInfo"}>
                  <img
                    loading="lazy"
                    src={avatarSrc}
                    className={"userAvatar"}
                    alt={`${userName}'s avatar`}
                  />
                  <span>{userName}</span>
                </div>
                <time className={"messageDate"} dateTime={date}>
                  {date}
                </time>
              </header>
              <p className={"messageContent"}>{content}</p>
            </article>
          </Link>
        ))}
        <PaginationMain />
      </div>
    </div>
  );
}
