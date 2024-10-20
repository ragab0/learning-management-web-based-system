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
  apiData: {},
  isInitialized: false,
  loading: false,
  error: null,
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
    // 01) login
    builder.addCase(getCourses.pending, (state, action) => {
      state.isInitialized = false;
      state.loading = true;
      state.apiData = {};
      toast.dismiss();
    });
    builder.addCase(getCourses.fulfilled, (state, action) => {
      state.isInitialized = true;
      state.loading = false;
      state.apiData = action.payload;
    });
    builder.addCase(getCourses.rejected, (state, action) => {
      state.isInitialized = true;
      state.loading = false;
      toast.error(action.payload?.result, fixedToastOptions);
    });

    apiLoadingBuilder(builder, getCourse, "currentCourse");
  },
});

export default coursesSlice.reducer;
export { getCourses, getCourse };
