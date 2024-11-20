import React from "react";
import "./Message.css";
import { Link } from "react-router-dom";
import ProfileImg from "../../ProfileImg/ProfileImg";

export default function Message({ chat, type = "student" }) {
  const { _id, student, mentor } = chat;
  const { fname, lname, photo } = type === "mentor" ? student : mentor;

  return (
    <Link to={`./${_id}`} className="message-wrappepr">
      <article className={"message-container mb-3"}>
        <header className={"message-header"}>
          <div className={"user-info"}>
            <ProfileImg fname={fname[0]} lL={lname[0]} photo={photo} />
            <h2 className=" mb-0">
              {fname} {lname}
            </h2>
          </div>
          {/* <time className={"message-date"} dateTime={date}>
            {date}
          </time> */}
        </header>
        {/* <p className={"message-content"}>{content}</p> */}
      </article>
    </Link>
  );
}
