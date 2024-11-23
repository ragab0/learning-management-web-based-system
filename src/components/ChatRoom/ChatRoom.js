import React, { useCallback, useEffect, useState } from "react";
import "./ChatRoom.css";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ArrowIcon from "../../assets/svgsComps/ArrowIcon";
import NoContent from "../NoContent/NoContent";
import Loader from "../Loader/Loader";
import ProfileImg from "../ProfileImg/ProfileImg";
import mySocket from "../../utils/myIoSocketServer";
import Reply from "./Reply/Reply";
import debounce from "lodash.debounce";
import {
  addMessageClientSide,
  fetchMentorChatRoom,
  fetchStudentChatRoom,
} from "../../store/slices/chatsSlice";

export default function ChatRoom({ type = "student" }) {
  const datesHistory = new Set();

  const [isTyping, setIsTyping] = useState(false);
  const { roomId } = useParams();
  const dispatch = useDispatch();
  const {
    apiData: { result = {} },
    loading,
    isInitialized,
    error,
  } = useSelector((state) => state.chats.currentChatRoom);
  const currentUserId = useSelector(
    (state) => state.auth.login.apiData.result?._id
  );

  const targetUser = type === "student" ? result.mentor : result.student;
  const { fname, lname, photo } = targetUser || {};
  const msgs = result.msgs || [];

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

  function checkDay(day) {
    if (datesHistory.has(day)) {
      return false;
    } else {
      datesHistory.add(day);
      return true;
    }
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
        {msgs.map((msg, i) => (
          <Reply
            key={i}
            msg={msg}
            checkDay={checkDay}
            currentUserId={currentUserId}
          />
        ))}
        {isTyping && (
          <div className="typing-indicator">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        )}
      </div>
      <MessageForm
        roomId={roomId}
        isTyping={isTyping}
        setIsTyping={setIsTyping}
        currentUserId={currentUserId}
      />
    </div>
  );
}

function MessageForm({ roomId, isTyping, setIsTyping, currentUserId }) {
  const dispatch = useDispatch();
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const {
    register,
    formState: { errors, isValid, isDirty },
    setValue,
    handleSubmit,
    watch,
  } = useForm();
  const message = watch("message");

  useEffect(() => {
    mySocket.emit("joinRoom", { roomId });
    return () => {
      mySocket.off("joinRoom");
      mySocket.emit("userStopedTyping", { roomId });
    };
  }, [roomId]);

  useEffect(() => {
    const handleSavedMessage = (msgData) => {
      dispatch(addMessageClientSide({ msg: msgData }));
    };

    mySocket.on("savedMessage", handleSavedMessage);
    return () => {
      mySocket.off("savedMessage", handleSavedMessage);
    };
  }, [dispatch]);

  useEffect(
    function () {
      mySocket.on("userStartTyping", () => {
        console.log(1);
        setIsTyping(true);
      });
      mySocket.on("userStopedTyping", () => {
        console.log(0);
        setIsTyping(false);
      });
      return function () {
        mySocket.off("userStartTyping");
        mySocket.off("userStopedTyping");
      };
    },
    [setIsTyping]
  );

  useEffect(function () {}, [message]);

  function changeHandler({ target: { value } }) {
    if (value.trim() && isInputEmpty) {
      mySocket.emit("userStartTyping", { roomId });
      setIsInputEmpty(false);
      console.log("typing");
    } else if (!value.trim() && !isInputEmpty) {
      mySocket.emit("userStopedTyping", { roomId });
      setIsInputEmpty(true);
      console.log("stoped");
    }
  }

  function submitHandler(data) {
    mySocket.emit("userStopedTyping", { roomId });
    mySocket.emit("newMessage", {
      content: data.message.trim(),
      roomId,
    });
    setIsInputEmpty(true);
    setValue("message", "");
  }

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="input-container d-flex gap-3 p-3 border-top"
    >
      <input
        className="form-control py-2"
        placeholder="Type your message"
        {...register("message", {
          required: "Message must not be empty!",
          validate: (value) =>
            value.trim().length > 0 || "Message cannot be empty",
          onChange: changeHandler,
        })}
      />
      <button
        type="submit"
        className="btn btn-primary"
        disabled={!isValid || !isDirty}
      >
        Send
      </button>
    </form>
  );
}
