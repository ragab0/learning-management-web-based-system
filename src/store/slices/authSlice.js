import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import myAxios from "../../utils/myAxios";
import { toast } from "react-toastify";
import { delay } from "../../utils/delay";
import { fixedToastOptions } from "../../utils/fixedToast";

const NAME = "auth";
const initialState = {
  login: {
    loading: false,
    user: null,
    isAuthRole: false,
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
  async (data, { rejectWithValue }) => {
    try {
      const res = await toast.promise(myAxios.post("/login", data), {
        pending: "Login in...",
        success: "Login in successful! 🎉",
        error: {
          render(data) {
            return data.data.message || "An error occur!";
          },
        },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const isLogin = createAsyncThunk(`${NAME}/isLogin`, async () => {
  const [res] = await Promise.allSettled([myAxios.get("/is-login"), delay(0)]);
  return res?.value?.data || {};
});

const signup = createAsyncThunk(
  `${NAME}/signup`,
  async (data, { rejectWithValue }) => {
    try {
      const res = await toast.promise(myAxios.post("/signup", data), {
        pending: "Signing up...",
        success: "Signing up successful! 🎉",
        error: {
          render(data) {
            return data.data.message || "An error occur!";
          },
        },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const logout = createAsyncThunk(`${NAME}/logout`, async () => {
  const res = await myAxios.post("/logout");
  return res.data;
});

const authSlice = createSlice({
  name: NAME,
  initialState,
  extraReducers(builder) {
    // 01) login
    builder.addCase(login.pending, (state) => {
      state.login.loading = true;
      state.login.user = null;
      state.login.isAuthRole = false;
      toast.dismiss();
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.login.loading = false;
      state.login.user = action.payload?.user;
      state.login.isAuthRole = action.payload?.user?.role;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.login.loading = false;
      state.login.user = null;
      state.login.isAuthRole = false;
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
      state.login.loading = true;
      state.login.user = null;
      state.login.isAuthRole = false;
      state.login.isInitialized = false;
    });
    builder.addCase(isLogin.fulfilled, (state, action) => {
      state.login.loading = false;
      state.login.user = action.payload?.user;
      state.login.isAuthRole = action.payload?.user?.role;
      state.login.isInitialized = true;

      // toast.success(`Auto login done!`);
    });
    builder.addCase(isLogin.rejected, (state, action) => {
      state.login.loading = false;
      state.login.user = null;
      state.login.isAuthRole = false;
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
