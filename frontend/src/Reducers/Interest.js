import { createSlice } from "@reduxjs/toolkit";
import { createInterest, getInterest } from "../Store/InterestRequests";

export const Interest = createSlice({
  name: "Interest",
  initialState: {
    interestData: {},
    loading: false,
    error: null,
    success: false,
  },

  extraReducers: (builder) => {
    // create Personal Info
    builder.addCase(createInterest.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
    });
    builder.addCase(createInterest.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    builder.addCase(createInterest.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    // Get Personal Info

    builder.addCase(getInterest.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.interestData = { ...payload };
    });
    builder.addCase(getInterest.rejected, (state, { payload }) => {
      state.loading = false;
      state.interestData = {};
      state.error = payload;
    });
    builder.addCase(getInterest.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
  },
});

export default Interest.reducer;
