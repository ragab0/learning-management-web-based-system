import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { basicThinker, toastedThinker } from "../../utils/thunks";
import { toast } from "react-toastify";
import { fixedToastOptions } from "../../utils/fixedToast";

const NAME = "mentor";
const initialState = {
  basicProfile: { loading: false, error: false },
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
  },
});

export default mentorSlice.reducer;
export { fetchMentorBasicProfile, updateMentorBasicProfile };
