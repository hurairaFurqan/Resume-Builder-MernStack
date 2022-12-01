import { createSlice } from "@reduxjs/toolkit";
import {
  createPersonalInfo,
  getPersonalInfo,
} from "../Store/PersonalInfoRequests";

export const PersonalInfo = createSlice({
  name: "personalInfo",
  initialState: {
    loading: false,
    personalData: {},
    error: null,
    success: false,
  },

  extraReducers: (builder) => {
    // create Personal Info
    builder.addCase(createPersonalInfo.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
    });
    builder.addCase(createPersonalInfo.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    builder.addCase(createPersonalInfo.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    // Get Personal Info

    builder.addCase(getPersonalInfo.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.personalData = { ...payload };
    });
    builder.addCase(getPersonalInfo.rejected, (state, { payload }) => {
      state.loading = false;
      state.personalData = {};
      state.error = payload;
    });
    builder.addCase(getPersonalInfo.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
  },
});

export default PersonalInfo.reducer;
