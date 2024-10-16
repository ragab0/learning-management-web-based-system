import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { basicThinker, toastedThinker } from "../../utils/thunks";
import { toast } from "react-toastify";
import { fixedToastOptions } from "../../utils/fixedToast";
import { apiLoadingBuilder } from "../../utils/apiLoadingBuilder";

const NAME = "mentor";
const initialState = {
  basicProfile: { loading: false, error: false },
  taughtCourses: {
    apiData: {},
    isInitialized: false,
    loading: false,
    error: null,
  },
  createMentorCourse: {
    isInitialized: false,
  },
};

/******************** Mentor basic profile (Fetch && Update) */
const mentorProfilePath = "/mentor/profile";

const fetchMentorBasicProfile = createAsyncThunk(
  `${NAME}/fetchMentorBasicProfile`,
  basicThinker("get", mentorProfilePath)
);

const updateMentorBasicProfile = createAsyncThunk(
  `${NAME}/updateMentorBasicProfile`,
  toastedThinker("put", mentorProfilePath, "Saving")
);

/******************** Mentor Courses (FetchAll, addOne, updateOnde, deleteOne, and fetchOne) */
const mentorCoursesPath = "/mentor/courses";

const fetchMentorAllCourses = createAsyncThunk(
  `${NAME}/fetchMentorAllCourses`,
  basicThinker("get", mentorCoursesPath)
);

const createMentorCourse = createAsyncThunk(
  `${NAME}/createMentorCourse`,
  toastedThinker("post", mentorCoursesPath, "Creating")
);

const updateMentorCourse = createAsyncThunk(
  `${NAME}/updateMentorCourse`,
  toastedThinker("put", mentorCoursesPath, "Updating")
);

const deleteMentorCourse = createAsyncThunk(
  `${NAME}/deleteMentorCourse`,
  toastedThinker("delete", mentorCoursesPath, "Deleting")
);

const fetchMentorCourse = createAsyncThunk(
  `${NAME}/fetchMentorCourse`,
  basicThinker("get", mentorCoursesPath)
);

const mentorSlice = createSlice({
  name: NAME,
  initialState,
  extraReducers(builder) {
    /************ BASIC proile (Mentor) ************/
    // fetchMentorBasicProfile
    builder.addCase(fetchMentorBasicProfile.pending, (state) => {
      state.basicProfile.loading = true;
      state.basicProfile.error = null;
    });
    builder.addCase(fetchMentorBasicProfile.fulfilled, (state) => {
      state.basicProfile.loading = false;
    });
    builder.addCase(fetchMentorBasicProfile.rejected, (state, action) => {
      state.basicProfile.loading = false;
      state.basicProfile.error = action.error.message;
    });

    // updateMentorBasicProfile
    builder.addCase(updateMentorBasicProfile.pending, (state) => {
      state.basicProfile.loading = true;
      toast.dismiss();
    });
    builder.addCase(updateMentorBasicProfile.fulfilled, (state) => {
      state.basicProfile.loading = false;
      /** UPDATE login state */
    });
    builder.addCase(updateMentorBasicProfile.rejected, (state, action) => {
      state.basicProfile.loading = false;
      if (action.payload?.result) {
        toast.error(action.payload?.result, fixedToastOptions);
      } else {
        action.payload?.results?.map((obj) =>
          Object.entries(obj).map(([k, v]) =>
            toast.error(`${k}: ${v}`, fixedToastOptions)
          )
        );
      }
    });

    /************ COURSES section (Mentor) ************/
    // 01 Fetch all:
    apiLoadingBuilder(builder, fetchMentorAllCourses, "taughtCourses");
    // 02 Create one:
    builder.addCase(createMentorCourse.pending, (state) => {
      state["taughtCourses"].isInitialized = false;
      state["taughtCourses"].loading = true;
      state["taughtCourses"].error = null;
      state.createMentorCourse.isInitialized = false;
    });
    builder.addCase(createMentorCourse.fulfilled, (state, action) => {
      state["taughtCourses"].isInitialized = true;
      state["taughtCourses"].loading = false;
      state["taughtCourses"].apiData = action.payload;
      state.createMentorCourse.isInitialized = true;
    });
    builder.addCase(createMentorCourse.rejected, (state, action) => {
      state["taughtCourses"].isInitialized = true;
      state["taughtCourses"].loading = false;
      state["taughtCourses"].error = action.error.message;
      state.createMentorCourse.isInitialized = true;
    });

    apiLoadingBuilder(builder, updateMentorCourse, "taughtCourses");
    apiLoadingBuilder(builder, deleteMentorCourse, "taughtCourses");
    apiLoadingBuilder(builder, fetchMentorCourse, "taughtCourses");
  },
});

export default mentorSlice.reducer;
export {
  fetchMentorBasicProfile,
  updateMentorBasicProfile,
  fetchMentorAllCourses,
  createMentorCourse,
  updateMentorCourse,
  deleteMentorCourse,
  fetchMentorCourse,
};
