import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import myAxios from "../../utils/myAxios";
import { toast } from "react-toastify";
import { fixedToastOptions } from "../../utils/fixedToast";

const NAME = "course";
const initialState = {
  apiData: {},
  isInitialized: false,
  loading: false,
};

const addCourseToWishlist = createAsyncThunk(
  `${NAME}/addCourseToWishlist`,
  async ({ courseId }, { rejectWithValue }) => {
    try {
      const res = await myAxios.post(`/student/courses/courseId`);

      console.log("####", res);
      return res.data || {};
    } catch (axiosError) {
      console.log("##########33", axiosError);
      return rejectWithValue(axiosError.response.data);
    }
  }
);

const courseSlice = createSlice({
  name: NAME,
  initialState,
  extraReducers(builder) {
    // 01) login
    builder.addCase(addCourseToWishlist.pending, (state, action) => {
      state.isInitialized = false;
      state.loading = true;
      state.apiData = {};
      toast.dismiss();
    });
    builder.addCase(addCourseToWishlist.fulfilled, (state, action) => {
      state.isInitialized = true;
      state.loading = false;
      state.apiData = action.payload;
    });
    builder.addCase(addCourseToWishlist.rejected, (state, action) => {
      state.isInitialized = true;
      state.loading = false;
      toast.error(action.payload?.result, fixedToastOptions);
    });
  },
});

export default courseSlice.reducer;
export { addCourseToWishlist };
