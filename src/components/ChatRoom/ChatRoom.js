import React from "react";
import "./ChatRoom.css";
import ArrowIcon from "../../assets/svgsComps/ArrowIcon";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { msgsData } from "../../data/chat";

export default function ChatRoom() {
  return (
    <main className="chat-room">
      <header className="header">
        <div className="header-user-info d-flex align-items-center gap-2">
          <Link to=".." className="btn d-flex align-items-center py-3">
            <ArrowIcon />
          </Link>
          <img src="" alt="Mentor" className="avatar border-1 border-black" />
          <h2 className="user-name h5 mb-0">Ronald Richards</h2>
        </div>
        {/* <p>...</p> */}
      </header>
      <div className="chat-room-body p-3">
        <div className="date-chip mx-auto rounded-2 my-3">Today</div>
        {msgsData.map(({ sender, text, timestamp }, i) => (
          <p
            key={i}
            className={`message ${sender !== "123" ? "reply-message" : ""}`}
          >
            {text}
            <span className="timestamp">{timestamp}</span>
          </p>
        ))}
      </div>
      <MessageForm />
    </main>
  );
}

function MessageForm() {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  function submitHandler(data) {
    reset();
  }
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="input-container d-flex gap-3 p-3 mt-3 border-top"
    >
      <input
        className={`form-control py-2 ${
          errors?.message ? "is-invalid border-danger" : ""
        }`}
        placeholder="type your message"
        {...register("message", {
          required: "Message must not be empty!",
        })}
      />
      <button type="submit" className="btn btn-primary">
        Send
      </button>
    </form>
  );
}
