import React from "react";
import "./Message.css";
import { Link } from "react-router-dom";

export default function Message({ msg }) {
  const { avatarSrc, userName, date, content, id } = msg;
  return (
    <Link to={`./${id}`} className="message-wrappepr">
      <article className={"message-container mb-3"}>
        <header className={"message-header"}>
          <div className={"user-info"}>
            <img
              loading="lazy"
              src={avatarSrc}
              className={"user-avatar"}
              alt={`${userName}'s avatar`}
            />
            <span>{userName}</span>
          </div>
          <time className={"message-date"} dateTime={date}>
            {date}
          </time>
        </header>
        <p className={"message-content"}>{content}</p>
      </article>
    </Link>
  );
}
