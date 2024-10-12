import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import myAxios from "../../utils/myAxios";
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
    state[field].loading = true;
    state[field].error = null;
  });
  builder.addCase(asyncCreator.fulfilled, (state, action) => {
    state[field].loading = false;
    state[field].apiData = action.payload;
  });
  builder.addCase(asyncCreator.rejected, (state, action) => {
    state[field].loading = false;
    state[field].error = action.error.message;
  });
}

const NAME = "student";
const initialState = {
  basicProfile: { loading: false }, // data in auth.login
  enrolledCourses: { apiData: [], loading: false, error: null },
  archivedCourses: { apiData: [], loading: false, error: null },
  cartCourses: { apiData: [], loading: false, error: null },
  wishlistCourses: { apiData: [], loading: false, error: null },
  mentors: { apiData: [], loading: false, error: null },
  messages: { apiData: [], loading: false, error: null },
  chats: { apiData: [], loading: false, error: null },
};

/******************** Profile ******************** */
/** Student Profile (get) */
const fetchBasicProfile = createAsyncThunk(
  `${NAME}/fetchBasicProfile`,
  basicThinker("get", "/student/profile")
);

/** Student Profile (1. update) */
const updateBasicProfile = createAsyncThunk(
  `${NAME}/updateBasicProfile`,
  toastedThinker("put", "/student/profile", "Saving")
);

/******************** Courses Enrolled /******************** */
/** Courses Enrolled (getAll)  */
const fetchEnrolledCourses = createAsyncThunk(
  `${NAME}/fetchEnrolledCourses`,
  basicThinker("get", "/student/courses/enrolled")
);

/* Courses Enrolled (1. enrollOne)  */
// const enrollNewCourse = createAsyncThunk(
//   `${NAME}/enrollNewCourse`,
//   async (data, { rejectWithValue }) => {
//     try {
//       const res = await toast.promise(
//         myAxios.post("/student/courses/cart", data),
//         {
//           pending: "Adding to cart...",
//           success: "Addition done! 🎉",
//           error: {
//             render(data) {
//               return data.data.message || "An error occur!";
//             },
//           },
//         }
//       );
//       return res.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );
// /* Courses Enrolled (2. archiveOne)  */
// const archiveEnrolledCourse = createAsyncThunk(
//   `${NAME}/archiveEnrolledCourse`,
//   async (data, { rejectWithValue }) => {
//     try {
//       const res = await toast.promise(
//         myAxios.delete("/student/courses/cart", data),
//         {
//           pending: "Deleting from cart...",
//           success: "Deletting done! 🎉",
//           error: {
//             render(data) {
//               return data.data.message || "An error occur!";
//             },
//           },
//         }
//       );
//       return res.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

/********************
 * Enrolled content
 *
 */

/******************** Courses archived (get) */
const fetchArchivedCourses = createAsyncThunk(
  `${NAME}/fetchArchivedCourses`,
  basicThinker("get", "/student/courses/archived")
);

/** Courses archived (1. unArOne) */
// const addCartCourse = createAsyncThunk(
//   `${NAME}/addCartCourse`,
//   async (data, { rejectWithValue }) => {
//     try {
//       const res = await toast.promise(
//         myAxios.post("/student/courses/cart", data),
//         {
//           pending: "Adding to cart...",
//           success: "Addition done! 🎉",
//           error: {
//             render(data) {
//               return data.data.message || "An error occur!";
//             },
//           },
//         }
//       );
//       return res.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

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

    // 01) Courses enrolled:
    apiLoadingBuilder(builder, fetchEnrolledCourses, "enrolledCourses");
    // apiLoadingBuilder(builder, fetchEnrolledCourses, "enrolledCourses");
    // apiLoadingBuilder(builder, fetchEnrolledCourses, "enrolledCourses");
    // 02) Courses archived:
    apiLoadingBuilder(builder, fetchArchivedCourses, "archivedCourses");
    // apiLoadingBuilder(builder, fetchArchivedCourses, "archivedCourses");
    // apiLoadingBuilder(builder, fetchArchivedCourses, "archivedCourses");
    // 03) Courses cart:
    apiLoadingBuilder(builder, fetchCartCourses, "cartCourses");
    apiLoadingBuilder(builder, addCartCourse, "cartCourses");
    apiLoadingBuilder(builder, removeCartCourse, "cartCourses");
    // 04) wishlistCourses
    apiLoadingBuilder(builder, fetchWishlistCourses, "wishlistCourses");
    apiLoadingBuilder(builder, addWishlistCourse, "wishlistCourses");
    apiLoadingBuilder(builder, removeWishlistCourse, "wishlistCourses");

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
  fetchCartCourses,
  addCartCourse,
  removeCartCourse,
  fetchWishlistCourses,
  addWishlistCourse,
  removeWishlistCourse,
};
