import React, { useEffect } from "react";
import "./ChatRoom.css";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ArrowIcon from "../../assets/svgsComps/ArrowIcon";
import NoContent from "../NoContent/NoContent";
import Loader from "../Loader/Loader";
import ProfileImg from "../ProfileImg/ProfileImg";
import {
  fetchMentorChatRoom,
  fetchStudentChatRoom,
} from "../../store/slices/chatsSlice";

export default function ChatRoom({ type = "student" }) {
  const { roomId } = useParams();
  const dispatch = useDispatch();
  const {
    apiData: { result = {} },
    loading,
    isInitialized,
    error,
  } = useSelector((state) => state.chats.currentChatRoom);

  const targetUser = type === "student" ? result.mentor : result.student;
  const { fname, lname, photo } = targetUser || {};

  useEffect(
    function () {
      const action =
        type === "mentor" ? fetchMentorChatRoom : fetchStudentChatRoom;
      dispatch(action({ anotherDynamicPath: "/" + roomId }));
    },
    [dispatch, roomId, type]
  );

  if (!isInitialized || loading) {
    return <Loader />;
  }

  if (isInitialized && error) {
    return <NoContent />;
  }

  return (
    <div className="chat-room d-flex flex-column h-100">
      <header className="header">
        <div className="header-user-info d-flex align-items-center gap-2">
          <Link to=".." className="btn d-flex align-items-center py-3">
            <ArrowIcon />
          </Link>
          <ProfileImg fL={fname[0]} lL={lname[0]} photo={photo} />
          <h2 className="user-name h4 mb-0">
            {fname} {lname}
          </h2>
        </div>
        {/* <p>...</p> */}
      </header>
      <div className="chat-room-body p-3" style={{ height: "100%" }}>
        {/* <div className="date-chip mx-auto rounded-2 my-3">Today</div> */}
        {/* {msgsData.map(({ sender, text, timestamp }, i) => (
          <p
            key={i}
            className={`message ${sender !== "123" ? "reply-message" : ""}`}
          >
            {text}
            <span className="timestamp">{timestamp}</span>
          </p>
        ))} */}
      </div>
      <MessageForm />
    </div>
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
        placeholder="Type your message"
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
