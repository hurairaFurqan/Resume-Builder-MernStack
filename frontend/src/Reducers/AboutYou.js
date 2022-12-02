import { createSlice } from "@reduxjs/toolkit";
import { createAboutYou, getAboutYou } from "../Store/AboutYouRequests";

export const AboutYou = createSlice({
  name: "aboutYou",
  initialState: {
    loading: false,
    aboutyouData: {},
    error: null,
    success: false,
  },

  extraReducers: (builder) => {
    // create Personal Info
    builder.addCase(createAboutYou.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
    });
    builder.addCase(createAboutYou.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    builder.addCase(createAboutYou.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    // Get Personal Info

    builder.addCase(getAboutYou.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.aboutyouData = { ...payload };
    });
    builder.addCase(getAboutYou.rejected, (state, { payload }) => {
      state.loading = false;
      state.aboutyouData = {};
      state.error = payload;
    });
    builder.addCase(getAboutYou.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
  },
});

export default AboutYou.reducer;
