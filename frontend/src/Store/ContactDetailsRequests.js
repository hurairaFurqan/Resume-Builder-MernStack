import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_BASEURL_FORMDATA } from "./Constants";
import axios from "axios";
import { getToken } from "../Utilities/Token";

export const createContactDetails = createAsyncThunk(
  "contactDetails/create",
  async (values, { rejectWithValue }) => {
    try {
      const token = getToken();
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.post(
        `${API_BASEURL_FORMDATA}/contactDetails`,
        values,
        config
      );
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

export const getContactDetails = createAsyncThunk(
  "contactDetails/get",
  async (_, { rejectWithValue }) => {
    try {
      const token = getToken();
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.get(
        `${API_BASEURL_FORMDATA}/contactDetails`,
        config
      );

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
