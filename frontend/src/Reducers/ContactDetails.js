import { createSlice } from "@reduxjs/toolkit";
import {
  createContactDetails,
  getContactDetails,
} from "../Store/ContactDetailsRequests";

export const ContactDetails = createSlice({
  name: "contactDetails",
  initialState: {
    loading: false,
    error: null,
    success: false,
    contactData: {},
  },
  extraReducers: (builder) => {
    // create Personal Info
    builder.addCase(createContactDetails.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
    });
    builder.addCase(createContactDetails.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    builder.addCase(createContactDetails.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    // Get Personal Info

    builder.addCase(getContactDetails.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.contactData = { ...payload };
    });
    builder.addCase(getContactDetails.rejected, (state, { payload }) => {
      state.loading = false;
      state.contactData = {};
      state.error = payload;
    });
    builder.addCase(getContactDetails.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
  },
});

export default ContactDetails.reducer;
