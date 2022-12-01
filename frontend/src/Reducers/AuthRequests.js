import { createSlice } from "@reduxjs/toolkit";
import { getSignIn, getSignUp } from "../Store/AuthRequests";

// initialize userToken from local storage
const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

export const AuthRequests = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    userInfo: {},
    userToken,
    error: null,
    success: false,
    downloadResume: false,
  },
  extraReducers: (builder) => {
    // SignIn
    builder.addCase(getSignIn.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.userInfo = { ...payload.person };
      state.userToken = payload.token;
    });
    builder.addCase(getSignIn.rejected, (state, { payload }) => {
      state.loading = false;
      state.userInfo = {};
      state.userToken = null;
      state.error = payload;
    });
    builder.addCase(getSignIn.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    // signUp
    builder.addCase(getSignUp.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true; // registration successful
    });
    builder.addCase(getSignUp.rejected, (state, { payload }) => {
      state.loading = false;
      state.userInfo = {};
      state.userToken = null;
      state.error = payload;
    });
    builder.addCase(getSignUp.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
  },

  reducers: {
    logout: (state) => {
      state.userInfo = {};
      state.userToken = null;
      state.error = null;
    },

    downloadReumse: (state, { payload }) => {
      state.downloadResume = payload;
    },
  },
});

export const { logout, downloadReumse } = AuthRequests.actions;

export default AuthRequests.reducer;
