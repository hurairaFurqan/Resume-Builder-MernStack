import { createSlice } from "@reduxjs/toolkit";

export const Experience = createSlice({
  name: "experience",
  initialState: {
    experienceData: [],
  },
  reducers: {
    addExperienceInfo: (state, action) => {
      console.log("in add info reducer", action.payload);

      const { id } = action.payload;

      if (!state.experienceData.find((data) => data.id === id)) {
        console.log(`didn't find required ID`);
        state.experienceData.push({ id, data: action.payload.workFormData });
      } else {
        state.experienceData = state.experienceData.map((data) => {
          if (data?.id === id) {
            return { ...data, data: action.payload.workFormData };
          } else {
            return data;
          }
        });
      }
    },
  },
});

export const { addExperienceInfo } = Experience.actions;

export default Experience.reducer;
