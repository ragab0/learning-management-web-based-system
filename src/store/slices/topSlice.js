import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import myAxios from "../../utils/myAxios";

const NAME = "top";
const initialState = {
  // topStats: { data: null, loading: false, error: null },
  // topCategouries: { data: [], loading: false, error: null },
  topComments: {
    apiData: {},
    isInitialized: false,
    loading: false,
    error: null,
  },
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

const fetchTopStats = createAsyncThunk(`${NAME}/fetchTopStats`, async () => {
  const res = await myAxios.get("/top/stats");
  return res.data;
});

const fetchTopCategouries = createAsyncThunk(
  `${NAME}/fetchTopCategouries`,
  async () => {
    const res = await myAxios.get("/top/categouries");
    return res.data;
  }
);

const fetchTopComments = createAsyncThunk(
  `${NAME}/fetchTopComments`,
  async () => {
    const res = await myAxios.get("/top/comments");
    return res.data;
  }
);

const fetchTopCourses = createAsyncThunk(
  `${NAME}/fetchTopCourses`,
  async () => {
    const res = await myAxios.get("/top/courses");
    return res.data;
  }
);

const fetchTopMentors = createAsyncThunk(
  `${NAME}/fetchTopMentors`,
  async () => {
    const res = await myAxios.get("/top/mentors");
    return res.data;
  }
);

const topSlice = createSlice({
  name: NAME,
  initialState,
  extraReducers(builder) {
    // 01) topStats;
    builder.addCase(fetchTopStats.pending, (state) => {
      state.topStats.loading = true;
      state.topStats.error = null;
    });
    builder.addCase(fetchTopStats.fulfilled, (state, action) => {
      state.topStats.loading = false;
      state.topStats.data = action.payload;
    });
    builder.addCase(fetchTopStats.rejected, (state, action) => {
      state.topStats.loading = false;
      state.topStats.error = action.error.message;
    });

    // 02) topCategouries;
    builder.addCase(fetchTopCategouries.pending, (state) => {
      state.topCategouries.loading = true;
      state.topCategouries.error = null;
    });
    builder.addCase(fetchTopCategouries.fulfilled, (state, action) => {
      state.topCategouries.loading = false;
      state.topCategouries.data = action.payload;
    });
    builder.addCase(fetchTopCategouries.rejected, (state, action) => {
      state.topCategouries.loading = false;
      state.topCategouries.error = action.error.message;
    });

    // 03) topComments;
    builder.addCase(fetchTopComments.pending, (state) => {
      state.topComments.loading = true;
      state.topComments.error = null;
    });
    builder.addCase(fetchTopComments.fulfilled, (state, action) => {
      state.topComments.loading = false;
      state.topComments.data = action.payload;
    });
    builder.addCase(fetchTopComments.rejected, (state, action) => {
      state.topComments.loading = false;
      state.topComments.error = action.error.message;
    });

    // 04) topCourses;
    builder.addCase(fetchTopCourses.pending, (state) => {
      state.topCourses.loading = true;
      state.topCourses.error = null;
    });
    builder.addCase(fetchTopCourses.fulfilled, (state, action) => {
      state.topCourses.loading = false;
      state.topCourses.data = action.payload;
    });
    builder.addCase(fetchTopCourses.rejected, (state, action) => {
      state.topCourses.loading = false;
      state.topCourses.error = action.error.message;
    });

    // 05) topMentors;
    builder.addCase(fetchTopMentors.pending, (state) => {
      state.topMentors.loading = true;
      state.topMentors.error = null;
    });
    builder.addCase(fetchTopMentors.fulfilled, (state, action) => {
      state.topMentors.loading = false;
      state.topMentors.data = action.payload;
    });
    builder.addCase(fetchTopMentors.rejected, (state, action) => {
      state.topMentors.loading = false;
      state.topMentors.error = action.error.message;
    });
  },
});

export default topSlice.reducer;
