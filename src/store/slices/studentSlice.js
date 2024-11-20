import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { fixedToastOptions } from "../../utils/fixedToast";
import {
  basicThinker,
  basicThinkerMain,
  toastedThinker,
} from "../../utils/thunks";
import { apiLoadingBuilder } from "../../utils/apiLoadingBuilder";

/**
 * Student Profile: [get, ^^^update];
 *
 * Student Courses:
 * 01) enrolled: [getAll, ^^^enrollOne, ^^^archiveOne]:
 * 02) enrolledContent: [getOne];
 * 03  archived: [getAll, ^^^unArOne];
 * 04) cart: [getAll, ^^^1.addOne, ^^^2.removeOne, ^^^3.wishOne (move)];
 * 05) wishlist: [getAll, ^^^1.addOne, ^^^2.removeOne, ^^^3.cartOne (move)];
 *
 * Student mentors: [getAll];
 * Student chats: [getAll];
 * Student reviews: [getAll];
 * Student chats: [getAll];
 *
 */

const NAME = "student";
const initialState = {
  basicProfile: { loading: false, error: false },
  enrolledCourses: {
    apiData: {},
    isInitialized: false,
    loading: false,
    error: null,
  },
  archivedCourses: {
    apiData: {},
    isInitialized: false,
    loading: false,
    error: null,
  },
  currentStudyCourse: {
    progress: {},
    apiData: {},
    currentLesson: {
      url: "",
      id: "",
    },
    isInitialized: false,
    loading: false,
    error: null,
  },
  cartCourses: {
    apiData: {},
    isInitialized: false,
    loading: false,
    error: null,
  },
  wishlistCourses: {
    apiData: {},
    isInitialized: false,
    loading: false,
    error: null,
  },
  checkout: { apiData: {}, isInitialized: false, loading: false, error: null },
  mentors: { apiData: {}, isInitialized: false, loading: false, error: null },
  reviews: { apiData: {}, isInitialized: false, loading: false, error: null },
};

/******************** Studnet basic profile (Fetch && Update) */
const studentProfilePath = "/student/profile";
const fetchStudentBasicProfile = createAsyncThunk(
  `${NAME}/fetchStudentBasicProfile`,
  basicThinker("get", studentProfilePath)
);

const updateStudentBasicProfile = createAsyncThunk(
  `${NAME}/updateStudentBasicProfile`,
  toastedThinker("put", studentProfilePath, "Saving")
);

/******************** Courses Enrolled /******************** */
/** Courses Enrolled (getAll, getContent, archive)  */
const [enrolledPath, baughtContentPath, archivedPath] = [
  "/student/courses", // default is enrolled courses;
  "/student/courses",
  "/student/courses/archived",
];

const fetchEnrolledCourses = createAsyncThunk(
  `${NAME}/fetchEnrolledCourses`,
  basicThinker("get", enrolledPath)
);

const fetchBaughtCourseContent = createAsyncThunk(
  `${NAME}/fetchBaughtCourseContent`,
  basicThinker("get", baughtContentPath)
);

// 2 params courseId, progress;
const saveBaughtCourseProgress = createAsyncThunk(
  `${NAME}/saveBaughtCourseProgress`,
  basicThinker("post", baughtContentPath)
);

const archiveEnrolledCourse = createAsyncThunk(
  `${NAME}/archiveEnrolledCourse`,
  toastedThinker("post", archivedPath, "Archiving")
);

/******************** Courses archived (get) ********************/
/** (getAll, unarchive) */
const archivePath = "/student/courses/archived";

const fetchArchivedCourses = createAsyncThunk(
  `${NAME}/fetchArchivedCourses`,
  basicThinker("get", archivePath)
);

const unArchiveEnrolledCourse = createAsyncThunk(
  `${NAME}/unArchiveEnrolledCourse`,
  toastedThinker("put", archivePath, "UnArchiving")
);

/******************** Courses cart ********************/
/** (getAll, add, remove, wish) */
const cartPath = "/student/courses/cart";

const fetchCartCourses = createAsyncThunk(
  `${NAME}/fetchCartCourses`,
  basicThinker("get", cartPath)
);

const addCartCourse = createAsyncThunk(
  `${NAME}/addCartCourse`,
  toastedThinker("post", cartPath, "Adding")
);

const removeCartCourse = createAsyncThunk(
  `${NAME}/removeCartCourse`,
  toastedThinker("put", cartPath, "Deleting")
);

/******************** Courses Wishlist ********************/
/** (getAll, add, remove, wish) */
const wishlistPath = "/student/courses/wishlist";

const fetchWishlistCourses = createAsyncThunk(
  `${NAME}/fetchWishlistCourses`,
  basicThinker("get", wishlistPath)
);

const addWishlistCourse = createAsyncThunk(
  `${NAME}/addWishlistCourse`,
  toastedThinker("post", wishlistPath, "Wishing")
);

const removeWishlistCourse = createAsyncThunk(
  `${NAME}/removeWishlistCourse`,
  toastedThinker("put", wishlistPath, "Removing")
);

/**************** Checkout cart courses *****************/
/** checkout all cart */
const checkoutPath = "/student/cart/checkout";

const checkoutCartCourses = createAsyncThunk(
  `${NAME}/checkout`,
  toastedThinker("post", checkoutPath, "Checking our")
);

/******************* Student Mentors *******************/
const mentorsPath = `/student/mentors`;

const fetchMentors = createAsyncThunk(
  `${NAME}/fetchMentors`,
  basicThinker("get", mentorsPath)
);

const studentSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {
    unInitCheckout(state) {
      state.checkout = initialState.checkout;
    },
    updateProgress: (state, action) => {
      const { chapterId, lessonId, checked } = action.payload;
      if (!state.currentStudyCourse.progress[chapterId]) {
        state.currentStudyCourse.progress[chapterId] = {};
      }
      state.currentStudyCourse.progress[chapterId][lessonId] = checked;
    },
    setCurrentLesson(state, action) {
      action.payload.url &&
        (state.currentStudyCourse.currentLesson.url = action.payload.url);
      action.payload.id &&
        (state.currentStudyCourse.currentLesson.id = action.payload.id);
    },
  },
  extraReducers(builder) {
    /************ BASIC proile (Student) ************/
    // fetchStudentBasicProfile
    builder.addCase(fetchStudentBasicProfile.pending, (state) => {
      state.basicProfile.loading = true;
      state.basicProfile.error = null;
    });
    builder.addCase(fetchStudentBasicProfile.fulfilled, (state) => {
      state.basicProfile.loading = false;
    });
    builder.addCase(fetchStudentBasicProfile.rejected, (state, action) => {
      state.basicProfile.loading = false;
      state.basicProfile.error = action.error.message;
    });

    // updateStudentBasicProfile
    builder.addCase(updateStudentBasicProfile.pending, (state) => {
      state.basicProfile.loading = true;
      toast.dismiss();
    });
    builder.addCase(updateStudentBasicProfile.fulfilled, (state) => {
      state.basicProfile.loading = false;
      /** UPDATE login state */
    });
    builder.addCase(updateStudentBasicProfile.rejected, (state, action) => {
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

    // 01) Courses enrolled, archived, getBaughtCourseFullContent:
    apiLoadingBuilder(builder, fetchEnrolledCourses, "enrolledCourses");
    apiLoadingBuilder(builder, archiveEnrolledCourse, "enrolledCourses");
    // apiLoadingBuilder(builder, fetchBaughtCourseContent, "currentStudyCourse");
    builder.addCase(fetchBaughtCourseContent.pending, (state) => {
      state["currentStudyCourse"].isInitialized = false;
      state["currentStudyCourse"].loading = true;
      state["currentStudyCourse"].error = null;
    });
    builder.addCase(fetchBaughtCourseContent.fulfilled, (state, action) => {
      state["currentStudyCourse"].isInitialized = true;
      state["currentStudyCourse"].loading = false;
      state["currentStudyCourse"].apiData = action.payload;
      state.currentStudyCourse.progress = action.payload.result?.progress || {};
    });
    builder.addCase(fetchBaughtCourseContent.rejected, (state, action) => {
      state["currentStudyCourse"].isInitialized = true;
      state["currentStudyCourse"].loading = false;
      state["currentStudyCourse"].error = action.payload.result;
    });

    // 02) Courses archived:
    apiLoadingBuilder(builder, fetchArchivedCourses, "archivedCourses");
    apiLoadingBuilder(builder, unArchiveEnrolledCourse, "archivedCourses");
    // 03) Courses cart:
    apiLoadingBuilder(builder, fetchCartCourses, "cartCourses");
    apiLoadingBuilder(builder, addCartCourse, "cartCourses");
    apiLoadingBuilder(builder, removeCartCourse, "cartCourses");
    // 04) wishlistCourses
    apiLoadingBuilder(builder, fetchWishlistCourses, "wishlistCourses");
    apiLoadingBuilder(builder, addWishlistCourse, "wishlistCourses");
    apiLoadingBuilder(builder, removeWishlistCourse, "wishlistCourses");
    // 05) checkoutCartCourses
    apiLoadingBuilder(builder, checkoutCartCourses, "checkout");

    // 06) Mentors
    apiLoadingBuilder(builder, fetchMentors, "mentors");
  },
});

export default studentSlice.reducer;
const { unInitCheckout, updateProgress, setCurrentLesson } =
  studentSlice.actions;
export {
  unInitCheckout,
  updateProgress,
  setCurrentLesson,
  fetchStudentBasicProfile,
  updateStudentBasicProfile,
  fetchEnrolledCourses,
  fetchBaughtCourseContent,
  saveBaughtCourseProgress,
  archiveEnrolledCourse,
  fetchArchivedCourses,
  unArchiveEnrolledCourse,
  fetchCartCourses,
  addCartCourse,
  removeCartCourse,
  fetchWishlistCourses,
  addWishlistCourse,
  removeWishlistCourse,
  checkoutCartCourses,
  fetchMentors,
};
