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
        {isTyping && "Typing..."}
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

function MessageForm({ roomId, setIsTyping, currentUserId }) {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  const debouncedStartTyping = useCallback(
    debounce(() => {
      mySocket.emit("userStartTyping", { roomId });
    }, 500),
    []
  );

  const debouncedStopTyping = useCallback(
    debounce(() => {
      mySocket.emit("userStopedTyping", { roomId });
    }, 500),
    []
  );

  const handleInputChange = useCallback(
    (e) => {
      const inputValue = e.target.value;

      // Cancel previous debounced calls
      debouncedStartTyping.cancel();
      debouncedStopTyping.cancel();

      if (inputValue.trim() !== "") {
        debouncedStartTyping();
      } else {
        debouncedStopTyping();
      }
    },
    [debouncedStartTyping, debouncedStopTyping]
  );

  useEffect(() => {
    mySocket.emit("joinRoom", { roomId });
    return function () {
      mySocket.off("joinRoom");
    };
  }, [roomId]);

  useEffect(() => {
    mySocket.on("userStartTyping", () => {
      setIsTyping(true);
    });
    mySocket.on("userStopedTyping", () => {
      setIsTyping(false);
    });

    return function () {
      mySocket.off("userStartTyping");
      mySocket.off("userStopedTyping");
    };
  }, [setIsTyping]);

  useEffect(() => {
    mySocket.on("savedMessage", function (msgData) {
      dispatch(addMessageClientSide({ msg: msgData }));
    });

    return function () {
      mySocket.off("savedMessage");
    };
  }, [dispatch]);

  function submitHandler(data) {
    reset();
    mySocket.emit("newMessage", {
      content: data.message,
      roomId,
    });
    debouncedStopTyping();
  }

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="input-container d-flex gap-3 p-3 border-top"
    >
      <input
        className={`form-control py-2 ${
          errors?.message ? "is-invalid border-danger" : ""
        }`}
        placeholder="Type your message"
        {...register("message", {
          required: "Message must not be empty!",
          onChange: handleInputChange,
        })}
      />
      <button type="submit" className="btn btn-primary">
        Send
      </button>
    </form>
  );
}
