import { createSlice } from "@reduxjs/toolkit";



export const AboutYou = createSlice({
    name: "aboutYou",
    initialState: {
        aboutyouData: []
    },
    reducers: {
        addAboutyouInfo: (state, action) => {
            state.aboutyouData = action.payload;
        }
    }
});

export const {addAboutyouInfo} = AboutYou.actions;

export default AboutYou.reducer;