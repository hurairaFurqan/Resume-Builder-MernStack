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
        console.log(`didn't find required ID`);
        state.experienceData.push(data);
      } else {
        state.experienceData = state.experienceData.map((item) => {
          if (item?.id === id) {
            console.log("find the required id", id);
            console.log("data from payload", data);
            return { ...item, ...data };
          } else {
            return item;
          }
        });
      }
    },
  },
});

export const { addExperienceInfo } = Experience.actions;

export default Experience.reducer;
