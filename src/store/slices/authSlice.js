import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { fixedToastOptions } from "../../utils/fixedToast";
import { updateMentorBasicProfile } from "./mentorSlice";
import { updateStudentBasicProfile } from "./studentSlice";
import { basicThinker, toastedThinker } from "../../utils/thunks";

const NAME = "auth";
const initialState = {
  login: {
    apiData: {},
    loading: false,
    isAuthRole: null,
    isInitialized: false,
  },
  signup: {
    loading: false,
    isNewUser: false,
  },
  logout: {
    loading: false,
  },
};

const login = createAsyncThunk(
  `${NAME}/login`,
  toastedThinker("post", "/login", "Logging in")
);

const isLogin = createAsyncThunk(
  `${NAME}/isLogin`,
  basicThinker("get", "/is-login")
);

const signup = createAsyncThunk(
  `${NAME}/signup`,
  toastedThinker("post", "/signup", "Signing up")
);

const logout = createAsyncThunk(
  `${NAME}/logout`,
  toastedThinker("post", "/logout", "logging out")
);

const authSlice = createSlice({
  name: NAME,
  initialState,
  extraReducers(builder) {
    /************ UPDATE BASIC PROFILE (Student) ************/
    builder.addCase(updateStudentBasicProfile.pending, (state) => {
      state.login.loading = true;
    });
    builder.addCase(updateStudentBasicProfile.fulfilled, (state, action) => {
      state.login.apiData = action.payload;
      state.login.isAuthRole = action.payload?.result?.role;
      state.login.loading = false;
    });
    builder.addCase(updateStudentBasicProfile.rejected, (state) => {
      state.login.loading = false;
    });

    /************ UPDATE BASIC PROFILE (Mentor) ************/
    builder.addCase(updateMentorBasicProfile.pending, (state) => {
      state.login.loading = true;
    });
    builder.addCase(updateMentorBasicProfile.fulfilled, (state, action) => {
      state.login.apiData = action.payload;
      state.login.isAuthRole = action.payload?.result?.role;
      state.login.loading = false;
    });
    builder.addCase(updateMentorBasicProfile.rejected, (state) => {
      state.login.loading = false;
    });

    /************ USER Auth ************/
    // 01) login
    builder.addCase(login.pending, (state) => {
      state.login.apiData = {};
      state.login.isAuthRole = null;
      state.login.loading = true;
      state.login.isInitialized = false;
      toast.dismiss();
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.login.apiData = action.payload;
      state.login.isAuthRole = action.payload?.result?.role;
      state.login.loading = false;
      state.login.isInitialized = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.login.apiData = {};
      state.login.isAuthRole = null;
      state.login.loading = false;
      state.login.isInitialized = true;
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

    // 01 - 02) isLogin
    builder.addCase(isLogin.pending, (state) => {
      state.login.apiData = {};
      state.login.loading = true;
      state.login.isInitialized = false;
      state.login.isAuthRole = null;
    });
    builder.addCase(isLogin.fulfilled, (state, action) => {
      state.login.apiData = action.payload;
      state.login.isAuthRole = action.payload?.result?.role;
      state.login.loading = false;
      state.login.isInitialized = true;
      // toast.success(`Auto login done!`);
    });
    builder.addCase(isLogin.rejected, (state) => {
      state.login.apiData = {};
      state.login.isAuthRole = null;
      state.login.loading = false;
      state.login.isInitialized = true;
    });

    // 02) signup
    builder.addCase(signup.pending, (state) => {
      state.signup.loading = true;
      state.signup.isNewUser = false;
      toast.dismiss();
    });
    builder.addCase(signup.fulfilled, (state) => {
      state.signup.loading = false;
      state.signup.isNewUser = true;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.signup.loading = false;
      state.signup.isNewUser = false;
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

    // 03) logout
    builder.addCase(logout.pending, (state) => {
      state.logout.loading = true;
      state.logout.error = null;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.logout.loading = false;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.logout.loading = false;
    });
  },
});

export default authSlice.reducer;
export { login, isLogin, signup, logout };
