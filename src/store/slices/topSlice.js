import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topStats: { data: null, loading: false, error: null },
  topCourses: { data: [], loading: false, error: null },
  topMentors: { data: [], loading: false, error: null },
  topComments: { data: [], loading: false, error: null },
  topCategouries: { data: [], loading: false, error: null },
};

const topSlice = createSlice({
  name: "top",
  initialState,
  reducers: {},
});

export default topSlice.reducer;
module.exports.authActions = topSlice.actions;
