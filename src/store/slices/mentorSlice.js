import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const mentorSlice = createSlice({
  name: "mentor",
  initialState,
  reducers: {},
});

export default mentorSlice.reducer;
module.exports.authActions = mentorSlice.actions;
