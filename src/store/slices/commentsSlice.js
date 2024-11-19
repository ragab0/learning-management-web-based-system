import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { basicThinkerMain, toastedThinker } from "../../utils/thunks";
import { apiLoadingBuilder } from "../../utils/apiLoadingBuilder";

const NAME = "comments";
const initialState = {
  lessonComments: {
    apiData: {},
    isInitialized: false,
    loading: false,
    error: null,
  },
  // courseComments: {
  //   apiData: {},
  //   isInitialized: false,
  //   loading: false,
  //   error: null,
  // },
};

/** Lesson comments */
const commentsLessonPath = "/comments/lessons";

const fetchLessonComments = createAsyncThunk(
  `${NAME}/fetchLessonComments`,
  basicThinkerMain("get", commentsLessonPath)
);

/** CRUD comments */
const commentsPath = "/comments";

const addComment = createAsyncThunk(
  `${NAME}/addComment`,
  toastedThinker("post", commentsPath, "Adding Comment")
);

const editComment = createAsyncThunk(
  `${NAME}/editComment`,
  toastedThinker("patch", commentsPath, "Editing Comment")
);

const deleteComment = createAsyncThunk(
  `${NAME}/deleteComment`,
  toastedThinker("delete", commentsPath, "Deleting Comment")
);

const commentsSlice = createSlice({
  name: NAME,
  initialState,
  extraReducers(builder) {
    apiLoadingBuilder(builder, fetchLessonComments, "lessonComments");
    apiLoadingBuilder(builder, addComment, "lessonComments");
    apiLoadingBuilder(builder, editComment, "lessonComments");
    apiLoadingBuilder(builder, deleteComment, "lessonComments");
  },
});

export default commentsSlice.reducer;
export { fetchLessonComments, addComment, editComment, deleteComment };
