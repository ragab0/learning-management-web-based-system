import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import myAxios from "../../utils/myAxios";

const NAME = "student";
const initialState = {
  basicProfile: { data: null, loading: false, error: null },
  mentors: { data: [], loading: false, error: null },
  enrolledCourses: { data: [], loading: false, error: null },
  archivedCourses: { data: [], loading: false, error: null },
  cartCourses: { data: [], loading: false, error: null },
  wishlistCourses: { data: [], loading: false, error: null },
  messages: { data: [], loading: false, error: null },
  chats: { data: [], loading: false, error: null },
};

const fetchBasicProfile = createAsyncThunk(
  `${NAME}/fetchBasicProfile`,
  async () => {
    const res = await myAxios.get("/student/profile");
    return res.data;
  }
);

const fetchMentors = createAsyncThunk(`${NAME}/fetchMentors`, async () => {
  const res = await myAxios.get("/student/mentors");
  return res.data;
});

const fetchEnrolledCourses = createAsyncThunk(
  `${NAME}/fetchEnrolledCourses`,
  async () => {
    const res = await myAxios.get("/student/courses/enrolled");
    return res.data;
  }
);

const fetchArchivedCourses = createAsyncThunk(
  `${NAME}/fetchArchivedCourses`,
  async () => {
    const res = await myAxios.get("/student/courses/archived");
    return res.data;
  }
);

const fetchCartCourses = createAsyncThunk(
  `${NAME}/fetchCartlistCourses`,
  async () => {
    const res = await myAxios.get("/student/courses/cart");
    return res.data;
  }
);

const fetchWishlistCourses = createAsyncThunk(
  `${NAME}/fetchWishlistCourses`,
  async () => {
    const res = await myAxios.get("/student/courses/wishlist");
    return res.data;
  }
);

const fetchMessages = createAsyncThunk(`${NAME}/fetchMessages`, async () => {
  const res = await myAxios.get("/student/messages");
  return res.data;
});

const fetchChats = createAsyncThunk(`${NAME}/fetchChats`, async () => {
  const res = await myAxios.get("/student/chats");
  return res.data;
});

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
      state.basicProfile.data = action.payload;
    });
    builder.addCase(fetchBasicProfile.rejected, (state, action) => {
      state.basicProfile.loading = false;
      state.basicProfile.error = action.error.message;
    });

    // 02) mentors
    builder.addCase(fetchMentors.pending, (state) => {
      state.basicProfile.loading = true;
      state.basicProfile.error = null;
    });
    builder.addCase(fetchMentors.fulfilled, (state, action) => {
      state.mentors.loading = false;
      state.mentors.data = action.payload;
    });
    builder.addCase(fetchMentors.rejected, (state, action) => {
      state.basicProfile.loading = false;
      state.basicProfile.error = action.error.message;
    });

    // 03) enrolledCourses
    builder.addCase(fetchEnrolledCourses.pending, (state) => {
      state.basicProfile.loading = true;
      state.basicProfile.error = null;
    });
    builder.addCase(fetchEnrolledCourses.fulfilled, (state, action) => {
      state.basicProfile.loading = false;
      state.basicProfile.data = action.payload;
    });
    builder.addCase(fetchEnrolledCourses.rejected, (state, action) => {
      state.basicProfile.loading = false;
      state.basicProfile.error = action.error.message;
    });

    // 04) archivedCourses
    builder.addCase(fetchArchivedCourses.pending, (state) => {
      state.basicProfile.loading = true;
      state.basicProfile.error = null;
    });
    builder.addCase(fetchArchivedCourses.fulfilled, (state, action) => {
      state.basicProfile.loading = false;
      state.basicProfile.data = action.payload;
    });
    builder.addCase(fetchArchivedCourses.rejected, (state, action) => {
      state.basicProfile.loading = false;
      state.basicProfile.error = action.error.message;
    });

    // 05) cartCourses
    builder.addCase(fetchCartCourses.pending, (state) => {
      state.basicProfile.loading = true;
      state.basicProfile.error = null;
    });
    builder.addCase(fetchCartCourses.fulfilled, (state, action) => {
      state.basicProfile.loading = false;
      state.basicProfile.data = action.payload;
    });
    builder.addCase(fetchCartCourses.rejected, (state, action) => {
      state.basicProfile.loading = false;
      state.basicProfile.error = action.error.message;
    });

    // 06) wishlistCourses
    builder.addCase(fetchWishlistCourses.pending, (state) => {
      state.basicProfile.loading = true;
      state.basicProfile.error = null;
    });
    builder.addCase(fetchWishlistCourses.fulfilled, (state, action) => {
      state.basicProfile.loading = false;
      state.basicProfile.data = action.payload;
    });
    builder.addCase(fetchWishlistCourses.rejected, (state, action) => {
      state.basicProfile.loading = false;
      state.basicProfile.error = action.error.message;
    });

    // 07) messages
    builder.addCase(fetchMessages.pending, (state) => {
      state.basicProfile.loading = true;
      state.basicProfile.error = null;
    });
    builder.addCase(fetchMessages.fulfilled, (state, action) => {
      state.basicProfile.loading = false;
      state.basicProfile.data = action.payload;
    });
    builder.addCase(fetchMessages.rejected, (state, action) => {
      state.basicProfile.loading = false;
      state.basicProfile.error = action.error.message;
    });

    // 08) chats
    builder.addCase(fetchChats.pending, (state) => {
      state.basicProfile.loading = true;
      state.basicProfile.error = null;
    });
    builder.addCase(fetchChats.fulfilled, (state, action) => {
      state.basicProfile.loading = false;
      state.basicProfile.data = action.payload;
    });
    builder.addCase(fetchChats.rejected, (state, action) => {
      state.basicProfile.loading = false;
      state.basicProfile.error = action.error.message;
    });
  },
});

export default studentSlice.reducer;
