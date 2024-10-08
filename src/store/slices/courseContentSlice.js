import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const courseContentSlice = createSlice({
  name: "courseContent",
  initialState,
  reducers: {},
});

export default courseContentSlice.reducer;
module.exports.authActions = courseContentSlice.actions;
