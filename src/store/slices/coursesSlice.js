import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
});

export default coursesSlice.reducer;
module.exports.authActions = coursesSlice.actions;
