import { createSlice } from "@reduxjs/toolkit";
import { createExperience, getExperience } from "../Store/experienceRequests";

export const Experience = createSlice({
  name: "experience",
  initialState: {
    experienceData: {},
    loading: false,
    error: null,
    success: false,
  },

  extraReducers: (builder) => {
    // create Experience
    builder.addCase(createExperience.fulfilled, (state) => {
      state.loading = false;
      state.success = true;
    });
    builder.addCase(createExperience.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    builder.addCase(createExperience.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    // Get Experience

    builder.addCase(getExperience.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.experienceData = { ...payload };
    });
    builder.addCase(getExperience.rejected, (state, { payload }) => {
      state.loading = false;
      state.experienceData = {};
      state.error = payload;
    });
    builder.addCase(getExperience.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
  },
});

export default Experience.reducer;
