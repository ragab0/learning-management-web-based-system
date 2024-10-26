import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiLoadingBuilder } from "../../utils/apiLoadingBuilder";
import { basicThinker } from "../../utils/thunks";

const NAME = "top";
const initialState = {
  // topStats: { data: null, loading: false, error: null },
  // topCategouries: { data: [], loading: false, error: null },
  // topComments: {
  //   apiData: {},
  //   isInitialized: false,
  //   loading: false,
  //   error: null,
  // },
  topCourses: {
    apiData: {},
    isInitialized: false,
    loading: false,
    error: null,
  },
  topMentors: {
    apiData: {},
    isInitialized: false,
    loading: false,
    error: null,
  },
};

// const fetchTopStats = createAsyncThunk(`${NAME}/fetchTopStats`, async () => {
//   const res = await myAxios.get("/top/stats");
//   return res.data;
// });

// const fetchTopCategouries = createAsyncThunk(
//   `${NAME}/fetchTopCategouries`,
//   async () => {
//     const res = await myAxios.get("/top/categouries");
//     return res.data;
//   }
// );

// const fetchTopComments = createAsyncThunk(
//   `${NAME}/fetchTopComments`,
//   async () => {
//     const res = await myAxios.get("/top/comments");
//     return res.data;
//   }
// );

const topCoursesPath = "/top/courses";
const fetchTopCourses = createAsyncThunk(
  `${NAME}/fetchTopCourses`,
  basicThinker("get", topCoursesPath)
);

const topMentorsPath = "/top/mentors";
const fetchTopMentors = createAsyncThunk(
  `${NAME}/fetchTopMentors`,
  basicThinker("get", topMentorsPath)
);

const topSlice = createSlice({
  name: NAME,
  initialState,
  extraReducers(builder) {
    apiLoadingBuilder(builder, fetchTopCourses, "topCourses");
    apiLoadingBuilder(builder, fetchTopMentors, "topMentors");
  },
});

export default topSlice.reducer;
export { fetchTopCourses, fetchTopMentors };
