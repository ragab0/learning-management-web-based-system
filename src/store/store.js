import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import authSlice from "./slices/authSlice";
import studentSlice from "./slices/studentSlice";
import mentorSlice from "./slices/mentorSlice";
import coursesSlice from "./slices/coursesSlice";
import adminSlice from "./slices/adminSlice";
import topSlice from "./slices/topSlice";
import reviewsSlice from "./slices/reviewsSlice";
import commentsSlice from "./slices/commentsSlice";

const logger = createLogger();

const store = configureStore({
  reducer: {
    auth: authSlice,
    student: studentSlice,
    mentor: mentorSlice,
    admin: adminSlice,
    top: topSlice,
    courses: coursesSlice,
    reviews: reviewsSlice,
    comments: commentsSlice,
  },
  middleware: function (getDefaultMiddles) {
    return getDefaultMiddles().concat(logger);
  },
});

export default store;
