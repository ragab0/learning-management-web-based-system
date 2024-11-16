import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { basicThinker, toastedThinker } from "../../utils/thunks";
import { apiLoadingBuilder } from "../../utils/apiLoadingBuilder";

const NAME = "reviews";
const initialState = {
  courseReviews: {
    apiData: {},
    isInitialized: false,
    loading: false,
    error: null,
  },
  studentReviews: {
    apiData: {},
    isInitialized: false,
    loading: false,
    error: null,
  },
  mentorReviews: {
    apiData: {},
    isInitialized: false,
    loading: false,
    error: null,
  },
  currentStudyCourseReview: {
    apiData: {},
    isInitialized: false,
    loading: false,
    error: null,
  },
};

/** Course reviews */
const reviewCoursePath = "/reviews/course"; // with param;
const fetchCourseReviews = createAsyncThunk(
  `${NAME}/fetchCourseReviews`,
  basicThinker("get", reviewCoursePath)
);

/** Mentor reviews */
const reviewMentorPath = "/reviews/mentor"; // with param
const fetchMentorReviews = createAsyncThunk(
  `${NAME}/fetchMentorReviews`,
  basicThinker("get", reviewMentorPath)
);

/** Student reviews && CRUDS OF CURRENT student */
const reviewsPath = `/reviews/student`;

const fetchStudentReviews = createAsyncThunk(
  `${NAME}/fetchStudentReviews`,
  basicThinker("get", reviewsPath)
);

const getReview = createAsyncThunk(
  `${NAME}/getReview`,
  basicThinker("get", reviewsPath)
);

const saveReview = createAsyncThunk(
  // add && update;
  `${NAME}/saveReview`,
  toastedThinker("post", reviewsPath, "Saving")
);

const deleteReview = createAsyncThunk(
  `${NAME}/deleteReview`,
  toastedThinker("delete", reviewsPath, "Deleting")
);

const reviewsSlice = createSlice({
  name: NAME,
  initialState,
  extraReducers(builder) {
    // courseReviews
    apiLoadingBuilder(builder, fetchCourseReviews, "courseReviews");
    // mentor reviews
    apiLoadingBuilder(builder, fetchMentorReviews, "mentorReviews");
    // currentStudyCourseReview
    apiLoadingBuilder(builder, fetchStudentReviews, "studentReviews");
    apiLoadingBuilder(builder, saveReview, "currentStudyCourseReview");
    apiLoadingBuilder(builder, getReview, "currentStudyCourseReview");
    apiLoadingBuilder(builder, deleteReview, "currentStudyCourseReview");
  },
});

export default reviewsSlice.reducer;
export {
  fetchCourseReviews,
  fetchMentorReviews,
  fetchStudentReviews,
  saveReview,
  getReview,
  deleteReview,
};
