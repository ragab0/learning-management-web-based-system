import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { basicThinkerMain } from "../../utils/thunks";
import { apiLoadingBuilder } from "../../utils/apiLoadingBuilder";

const NAME = "chats";
const initialState = {
  chatsList: { apiData: {}, isInitialized: false, loading: false, error: null },
  currentChatRoom: {
    apiData: {},
    isInitialized: false,
    loading: false,
    error: null,
  },
};

/************* Dynamic [Messages, Chats] ***************/
const studentMessagesPath = `/student/messages`;
const studentChatsPath = `/student/chats`;

const fetchStudentChats = createAsyncThunk(
  `${NAME}/fetchStudentChats`,
  basicThinkerMain("get", studentChatsPath)
);

const fetchStudentChatRoom = createAsyncThunk(
  `${NAME}/fetchStudentChatRoom`,
  basicThinkerMain("get", studentChatsPath)
);

const addStudentMessage = createAsyncThunk(
  `${NAME}/addStudentMessage`,
  basicThinkerMain("get", studentMessagesPath)
);

/************* Mentor [Messages, Chats] ***************/
const mentorMessagesPath = `/student/messages`;
const mentorChatsPath = `/student/chats`;

const fetchMentorChats = createAsyncThunk(
  `${NAME}/fetchMentorChats`,
  basicThinkerMain("get", mentorChatsPath)
);

const fetchMentorChatRoom = createAsyncThunk(
  `${NAME}/fetchMentorChatRoom`,
  basicThinkerMain("get", mentorChatsPath)
);

const addMentorMessage = createAsyncThunk(
  `${NAME}/addMentorMessage`,
  basicThinkerMain("get", mentorMessagesPath)
);

const chatsSlice = createSlice({
  name: NAME,
  initialState,
  extraReducers(builder) {
    /** Student */
    apiLoadingBuilder(builder, fetchStudentChats, "chatsList");
    apiLoadingBuilder(builder, fetchStudentChatRoom, "currentChatRoom");
    apiLoadingBuilder(builder, addStudentMessage, "chatsList");
    /** Mentor */
    apiLoadingBuilder(builder, fetchMentorChats, "chatsList");
    apiLoadingBuilder(builder, fetchMentorChatRoom, "currentChatRoom");
    apiLoadingBuilder(builder, addMentorMessage, "chatsList");
  },
});

export default chatsSlice.reducer;
export {
  fetchStudentChats,
  fetchStudentChatRoom,
  addStudentMessage,
  fetchMentorChats,
  fetchMentorChatRoom,
  addMentorMessage,
};
