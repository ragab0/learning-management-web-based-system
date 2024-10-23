import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { basicThinker, toastedThinker } from "../../utils/thunks";
import { toast } from "react-toastify";
import { fixedToastOptions } from "../../utils/fixedToast";
import { apiLoadingBuilder } from "../../utils/apiLoadingBuilder";

const NAME = "mentor";
const initialState = {
  basicProfile: {
    // accessed by the public mentorPage of mainApp;
    apiData: {},
    isInitialized: false,
    loading: false,
    error: false,
  },
  taughtCourses: {
    apiData: {},
    isInitialized: false,
    loading: false,
    error: null,
  },
  createMentorCourse: {
    isInitialized: false,
    isNew: false,
  },
  currentCourse: {
    currentDummyChapters: [],
    apiData: {},
    isInitialized: false,
    loading: false,
    error: null,
  },
  extractedChapterInfo: {
    apiData: {},
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
  toastedThinker("put", mentorCoursesPath, "Updating Course")
);

const deleteMentorCourse = createAsyncThunk(
  `${NAME}/deleteMentorCourse`,
  toastedThinker("delete", mentorCoursesPath, "Deleting Course")
);

const fetchMentorCourse = createAsyncThunk(
  `${NAME}/fetchMentorCourse`,
  basicThinker("get", mentorCoursesPath, "Getting course")
);

/** Mentor course chapter */
const mentorCoursePath = mentorCoursesPath + `/extract-playlist`;

const extractMentorChapterYoutubePlaylist = createAsyncThunk(
  `${NAME}/extractMentorChapterYoutubePlaylist`,
  toastedThinker("post", mentorCoursePath, "Extracting a youtube playlist")
);

const mentorSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {
    mentorAddDummyChapter(state, action) {
      state.currentCourse.currentDummyChapters.push(action.payload) &&
        toast("New temporary chapter added!");
    },
    createMentorCourseIsSeen(state) {
      state.createMentorCourse.isNew = false;
    },
  },
  extraReducers(builder) {
    /************ BASIC proile (Mentor) ************/
    // fetchMentorBasicProfile
    apiLoadingBuilder(builder, fetchMentorBasicProfile, "basicProfile");

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
      state.createMentorCourse.isNew = false;
    });
    builder.addCase(createMentorCourse.fulfilled, (state, action) => {
      state["taughtCourses"].isInitialized = true;
      state["taughtCourses"].loading = false;
      state["taughtCourses"].apiData = action.payload;
      state.createMentorCourse.isInitialized = true;
      state.createMentorCourse.isNew = true;
    });
    builder.addCase(createMentorCourse.rejected, (state, action) => {
      state["taughtCourses"].isInitialized = true;
      state["taughtCourses"].loading = false;
      state["taughtCourses"].error = action.error.message;
      state.createMentorCourse.isInitialized = true;
      state.createMentorCourse.isNew = false;
    });
    // 03 extract info from a playlist in a chapter;
    apiLoadingBuilder(
      builder,
      extractMentorChapterYoutubePlaylist,
      "extractedChapterInfo"
    );

    // 04 Update metnor course;
    builder.addCase(updateMentorCourse.pending, (state) => {
      state["currentCourse"].isInitialized = false;
      state["currentCourse"].loading = true;
      state["currentCourse"].error = null;
      state["currentCourse"].currentDummyChapters = [];
      toast.dismiss();
    });
    builder.addCase(updateMentorCourse.fulfilled, (state, action) => {
      state["currentCourse"].isInitialized = true;
      state["currentCourse"].loading = false;
      state["currentCourse"].apiData = action.payload;
      state["currentCourse"].currentDummyChapters = [];
    });
    builder.addCase(updateMentorCourse.rejected, (state, action) => {
      state["currentCourse"].isInitialized = true;
      state["currentCourse"].loading = false;
      state["currentCourse"].error = action.error.message;
      state["currentCourse"].currentDummyChapters = [];
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

    // apiLoadingBuilder(builder, updateMentorCourse, "currentCourse");

    apiLoadingBuilder(builder, deleteMentorCourse, "taughtCourses");
    apiLoadingBuilder(builder, fetchMentorCourse, "currentCourse");
  },
});

export default mentorSlice.reducer;
const {
  mentorAddDummyChapter,
  mentorUpdateChapter,
  mentorUpdateDetails,
  mentorUpdateSettings,
  createMentorCourseIsSeen,
} = mentorSlice.actions;
export {
  // actions;
  mentorAddDummyChapter,
  mentorUpdateChapter,
  mentorUpdateDetails,
  mentorUpdateSettings,
  createMentorCourseIsSeen,
  // extraReducers (&thunks)
  fetchMentorBasicProfile,
  updateMentorBasicProfile,
  fetchMentorAllCourses,
  createMentorCourse,
  updateMentorCourse,
  deleteMentorCourse,
  fetchMentorCourse,
  extractMentorChapterYoutubePlaylist,
};
