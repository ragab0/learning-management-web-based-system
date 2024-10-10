import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import myAxios from "../../utils/myAxios";
import { delay } from "framer-motion";
import { toast } from "react-toastify";
import { fixedToastOptions } from "../../utils/fixedToast";

const NAME = "courses";
const initialState = {
  apiData: {},
  isInitialized: false,
  loading: false,
};

const getCourses = createAsyncThunk(
  `${NAME}/getCourses`,
  async ({ page = 1, pageSize = 10 }, { rejectWithValue }) => {
    try {
      const res = await myAxios.get(
        `/courses?page=${page}&pageSize=${pageSize}`
      );

      console.log("####", res);
      return res.data || {};
    } catch (axiosError) {
      console.log("##########33", axiosError);
      return rejectWithValue(axiosError.response.data);
    }
  }
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
  },
});

export default coursesSlice.reducer;
export { getCourses };
