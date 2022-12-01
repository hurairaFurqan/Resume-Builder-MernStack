import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASEURL_AUTH } from "./Constants";

export const getSignIn = createAsyncThunk(
  "auth /getSignIn",

  async (values, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${API_BASEURL_AUTH}/signin`,
        values,
        config
      );
      // store user's token in local storage
      localStorage.setItem("userToken", data.token);
      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getSignUp = createAsyncThunk(
  "auth/getSignUp",
  async (data, { rejectWithValue }) => {
    return await axios
      .post(`${API_BASEURL_AUTH}/signup`, data)
      .then((response) => response.data)
      .catch((error) => rejectWithValue(error.response.data));
  }
);
