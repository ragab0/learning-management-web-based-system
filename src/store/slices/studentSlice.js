import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import myAxios from "../../utils/myAxios";
import { delay } from "../../utils/delay";
import { toast } from "react-toastify";
import { fixedToastOptions } from "../../utils/fixedToast";

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
 * Student teachers: [getAll];
 * Student messages: [getAll];
 * Student chats: [getAll];
 *
 */

function basicThinker(method, path) {
  return async (data) => {
    const res = await myAxios[method](path);
    return res.data;
  };
}

function toastedThinker(method, path, actionName = "Processing") {
  actionName = actionName[0].toLocaleUpperCase() + actionName.slice(1);
  return async (data, { rejectWithValue }) => {
    try {
      const res = await toast.promise(myAxios[method](path, data), {
        pending: `${actionName}...`,
        success: `${actionName} done! 🎉`,
        error: {
          render(props) {
            console.log("DDD", props);
            return props.data.response.data?.result || "An error occur!";
          },
        },
      });
      return res.data;
    } catch (error) {
      console.log("##################", error);
      return rejectWithValue(error.response.data);
    }
  };
}

function apiLoadingBuilder(builder, asyncCreator, field) {
  builder.addCase(asyncCreator.pending, (state) => {
    state[field].isInitialized = false;
    state[field].loading = true;
    state[field].error = null;
  });
  builder.addCase(asyncCreator.fulfilled, (state, action) => {
    state[field].isInitialized = true;
    state[field].loading = false;
    state[field].apiData = action.payload;
  });
  builder.addCase(asyncCreator.rejected, (state, action) => {
    state[field].isInitialized = true;
    state[field].loading = false;
    state[field].error = action.error.message;
  });
}

const NAME = "student";
const initialState = {
  basicProfile: { loading: false }, // data in auth.login
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
  messages: { apiData: {}, isInitialized: false, loading: false, error: null },
  chats: { apiData: {}, isInitialized: false, loading: false, error: null },
};

/******************** Profile ******************** */
/** Student Profile (get, update) */
const profilePath = "/student/profile";

const fetchBasicProfile = createAsyncThunk(
  `${NAME}/fetchBasicProfile`,
  basicThinker("get", profilePath)
);

const updateBasicProfile = createAsyncThunk(
  `${NAME}/updateBasicProfile`,
  toastedThinker("put", profilePath, "Saving")
);

/******************** Courses Enrolled /******************** */
/** Courses Enrolled (getAll, getContent, archive)  */
const [enrolledPath, enrolledContentPath] = [
  "/student/courses/",
  "/student/study",
];

const fetchEnrolledCourses = createAsyncThunk(
  `${NAME}/fetchEnrolledCourses`,
  basicThinker("get", enrolledPath)
);

const fetchEnrolledCourseContent = createAsyncThunk(
  `${NAME}/fetchEnrolledCourseContent`,
  basicThinker("post", enrolledContentPath)
);

const archiveEnrolledCourse = createAsyncThunk(
  `${NAME}/archiveEnrolledCourse`,
  basicThinker("put", enrolledPath)
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
  toastedThinker("put", archivePath, "Adding")
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
  `${NAME}/cechkout`,
  basicThinker("post", checkoutPath)
);

// const fetchMentors = createAsyncThunk(`${NAME}/fetchMentors`, async () => {
//   const res = await myAxios.get("/student/mentors");
//   return res.data;
// });

// const fetchMessages = createAsyncThunk(`${NAME}/fetchMessages`, async () => {
//   const res = await myAxios.get("/student/messages");
//   return res.data;
// });

// const fetchChats = createAsyncThunk(`${NAME}/fetchChats`, async () => {
//   const res = await myAxios.get("/student/chats");
//   return res.data;
// });

const studentSlice = createSlice({
  name: NAME,
  initialState,
  extraReducers(builder) {
    // 01) basicProfile
    builder.addCase(fetchBasicProfile.pending, (state) => {
      state.basicProfile.loading = true;
      state.basicProfile.error = null;
    });
    builder.addCase(fetchBasicProfile.fulfilled, (state, action) => {
      state.basicProfile.loading = false;
    });
    builder.addCase(fetchBasicProfile.rejected, (state, action) => {
      state.basicProfile.loading = false;
      state.basicProfile.error = action.error.message;
    });

    // 02) updateBasicProfile
    builder.addCase(updateBasicProfile.pending, (state) => {
      state.basicProfile.loading = true;
      toast.dismiss();
    });
    builder.addCase(updateBasicProfile.fulfilled, (state) => {
      state.basicProfile.loading = false;
    });
    builder.addCase(updateBasicProfile.rejected, (state, action) => {
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
    // fetchEnrolledCourseContent
    // archiveEnrolledCourse
    // unArchiveEnrolledCourse

    // 01) Courses enrolled:
    apiLoadingBuilder(builder, fetchEnrolledCourses, "enrolledCourses");
    // apiLoadingBuilder(builder, fetchEnrolledCourseContent, "enrolledCourses");
    apiLoadingBuilder(builder, archiveEnrolledCourse, "enrolledCourses");

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

    // // mentors
    // builder.addCase(fetchMentors.pending, (state) => {
    //   state.basicProfile.loading = true;
    //   state.basicProfile.error = null;
    // });
    // builder.addCase(fetchMentors.fulfilled, (state, action) => {
    //   state.mentors.loading = false;
    //   state.mentors.apiData = action.payload;
    // });
    // builder.addCase(fetchMentors.rejected, (state, action) => {
    //   state.basicProfile.loading = false;
    //   state.basicProfile.error = action.error.message;
    // });

    // // messages
    // builder.addCase(fetchMessages.pending, (state) => {
    //   state.basicProfile.loading = true;
    //   state.basicProfile.error = null;
    // });
    // builder.addCase(fetchMessages.fulfilled, (state, action) => {
    //   state.basicProfile.loading = false;
    //   state.basicProfile.apiData = action.payload;
    // });
    // builder.addCase(fetchMessages.rejected, (state, action) => {
    //   state.basicProfile.loading = false;
    //   state.basicProfile.error = action.error.message;
    // });

    // // chats
    // builder.addCase(fetchChats.pending, (state) => {
    //   state.basicProfile.loading = true;
    //   state.basicProfile.error = null;
    // });
    // builder.addCase(fetchChats.fulfilled, (state, action) => {
    //   state.basicProfile.loading = false;
    //   state.basicProfile.apiData = action.payload;
    // });
    // builder.addCase(fetchChats.rejected, (state, action) => {
    //   state.basicProfile.loading = false;
    //   state.basicProfile.error = action.error.message;
    // });
  },
});

export default studentSlice.reducer;
export {
  fetchBasicProfile,
  updateBasicProfile,
  fetchEnrolledCourses,
  fetchEnrolledCourseContent,
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
};
