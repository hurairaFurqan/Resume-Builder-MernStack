import { createSlice } from "@reduxjs/toolkit";

export const Languages = createSlice({
  name: "languages",
  initialState: {
    languageData: [],
  },
  reducers: {
    addLanguageInfo: (state, action) => {
      const { id } = action.payload;

      const data = action.payload;

      if (!state.languageData.find((data) => data.id === id)) {
        state.languageData.push(data);
      } else {
        state.languageData = state.languageData.map((item) => {
          if (item?.id === id) {
            return { ...item, ...data };
          } else {
            return item;
          }
        });
      }
    },

  },
});

export const { addLanguageInfo } = Languages.actions;

export default Languages.reducer;
