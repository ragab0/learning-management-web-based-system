import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiLoadingBuilder } from "../../utils/apiLoadingBuilder";
import { toastedThinker } from "../../utils/thunks";

const NAME = "admin";
const initialState = {
  currentUsers: {
    apiData: {},
    isInitialized: false,
    loading: false,
    error: null,
  },
};

/** Mentors actions */
const mentorsPath = "/admin/mentors";

const fetchAllMentors = createAsyncThunk(
  `${NAME}/fetchAllMentors`,
  toastedThinker("get", mentorsPath)
);

/** Studetns actions */
const studentsPath = "/admin/students";

const fetchAllStudents = createAsyncThunk(
  `${NAME}/fetchAllStudents`,
  toastedThinker("get", studentsPath)
);

const adminSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    apiLoadingBuilder(builder, fetchAllMentors, "currentUsers");
    apiLoadingBuilder(builder, fetchAllStudents, "currentUsers");
  },
});

export default adminSlice.reducer;
export { fetchAllMentors, fetchAllStudents };
