import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import myAxios from "../../utils/myAxios";

const NAME = "auth";
const initialState = {
  login: {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
  },
  signup: {
    formData: null,
    loading: false,
    error: null,
  },
  logout: {
    loading: false,
    error: false,
  },
};

function login(formData) {
  return createAsyncThunk(`${NAME}/login`, async () => {
    const res = await myAxios.post("/login", formData);
    return res.data;
  });
}

function signup(formData) {
  return createAsyncThunk(`${NAME}/signup`, async () => {
    const res = await myAxios.post("/signup");
    return res.data;
  });
}

function logout() {
  return createAsyncThunk(`${NAME}/logout`, async () => {
    const res = await myAxios.post("/logout");
    return res.data;
  });
}

const authSlice = createSlice({
  name: NAME,
  initialState,
  extraReducers(builder) {
    // 01) login
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // 02) signup
    builder.addCase(signup.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.loading = false;
      state.formData = action.payload;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // 03) logout
    builder.logout(logout.pending, (state) => {
      state.loading = true;
    });
    builder.logout(logout.fulfilled, (state) => {
      state.loading = false;
    });
    builder.logout(logout.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default authSlice.reducer;
module.exports.authActions = authSlice.actions;

console.log(authSlice.actions);
