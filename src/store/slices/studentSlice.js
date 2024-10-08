import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basicProfile: { data: null, loading: false, error: null },
  enrolledCourses: { data: [], loading: false, error: null },
  wishlistCourses: { data: [], loading: false, error: null },
  archivedCourses: { data: [], loading: false, error: null },
  cartCourses: { data: [], loading: false, error: null },
  messages: { data: [], loading: false, error: null },
  chats: { data: [], loading: false, error: null },
  mentors: { data: [], loading: false, error: null },
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    basicInfo(state) {},
    teachers(state) {},
    messages(state) {},
    reviews(state) {},
    enrolledCourses(state) {},
  },
});

export default studentSlice.reducer;
module.exports.authActions = studentSlice.actions;
