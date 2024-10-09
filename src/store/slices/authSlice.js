import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import myAxios from "../../utils/myAxios";
import { toast } from "react-toastify";

const NAME = "auth";
const initialState = {
  login: {
    loading: false,
    user: null,
    isAuth: false,
  },
  signup: {
    loading: false,
  },
  logout: {
    loading: false,
  },
};

const fixedToastOptions = {
  autoClose: false,
  draggable: true,
  closeOnClick: true,
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
      state.login.isAuth = false;
      toast.dismiss();
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.login.loading = false;
      state.login.user = action.payload?.user;
      state.login.isAuth = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.login.loading = false;
      state.login.user = null;
      state.login.isAuth = false;
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

    // 02) signup
    builder.addCase(signup.pending, (state) => {
      state.signup.loading = true;
      toast.dismiss();
    });
    builder.addCase(signup.fulfilled, (state) => {
      state.signup.loading = false;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.signup.loading = false;
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
export { login, signup, logout };
