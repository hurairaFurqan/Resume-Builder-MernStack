import { createSlice } from "@reduxjs/toolkit";

export const Experience = createSlice({
  name: "experience",
  initialState: {
    experienceData: [],
  },
  reducers: {
    addExperienceInfo: (state, action) => {
      const { id } = action.payload;

      const data = action.payload;

      if (data.isPresent === true) {
        data.endMonth = "";
        data.endYear = "";
      }

      if (!state.experienceData.find((data) => data.id === id)) {
        state.experienceData.push(data);
      } else {
        state.experienceData = state.experienceData.map((item) => {
          if (item?.id === id) {
            return { ...item, ...data };
          } else {
            return item;
          }
        });
      }
    },

    removeExperienceInfo: (state, action) => {
      const { id } = action.payload;

      // state.experienceData = state.experienceData.filter(
      //   (item) => item.id !== id
      // );

      state.experienceData.delete(id);
    },
  },
});

export const { addExperienceInfo, removeExperienceInfo } = Experience.actions;

export default Experience.reducer;
