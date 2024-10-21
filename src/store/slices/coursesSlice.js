import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import myAxios from "../../utils/myAxios";
import { toast } from "react-toastify";
import { fixedToastOptions } from "../../utils/fixedToast";
import { basicThinker } from "../../utils/thunks";
import { apiLoadingBuilder } from "../../utils/apiLoadingBuilder";

const NAME = "courses";
const initialState = {
  currentCourse: {
    apiData: {},
    isInitialized: false,
    loading: false,
    error: null,
  },
  publicCourses: {
    apiData: {},
    isInitialized: false,
    loading: false,
    error: null,
  },
};

/** */
const coursesPath = "/courses";

const getCourses = createAsyncThunk(
  `${NAME}/getCourses`,
  basicThinker("get", coursesPath)
);

const getCourse = createAsyncThunk(
  `${NAME}/getCourse`,
  basicThinker("get", coursesPath)
);

const coursesSlice = createSlice({
  name: NAME,
  initialState,
  extraReducers(builder) {
    apiLoadingBuilder(builder, getCourses, "publicCourses");
    apiLoadingBuilder(builder, getCourse, "currentCourse");
  },
});

export default coursesSlice.reducer;
export { getCourses, getCourse };
