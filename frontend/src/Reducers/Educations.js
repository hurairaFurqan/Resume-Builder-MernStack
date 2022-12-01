import { createSlice } from "@reduxjs/toolkit";

export const Educations = createSlice({
  name: "educations",
  initialState: {
    educationData: [],
  },
  reducers: {
    addEducationInfo: (state, action) => {
      const { id } = action.payload;

      const data = action.payload;

      if (data.isPresent === true) {
        data.endMonth = "";
        data.endYear = "";
      }

      if (!state.educationData.find((data) => data.id === id)) {
        state.educationData.push(data);
      } else {
        state.educationData = state.educationData.map((item) => {
          if (item?.id === id) {
            return { ...item, ...data };
          } else {
            return item;
          }
        });
      }
    },

    removeEducationInfo: (state, action) => {
      const { id } = action.payload;

      state.educationData = state.educationData.filter(
        (item) => item.id !== id
      );
    },
  },
});

export const { addEducationInfo, removeEducationInfo } = Educations.actions;

export default Educations.reducer;
