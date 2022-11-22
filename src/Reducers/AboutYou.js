import { createSlice } from "@reduxjs/toolkit";



export const AboutYou = createSlice({
    name: "aboutYou",
    initialState: {
        aboutyouData: []
    },
    reducers: {
        addAboutyouInfo: (state, action) => {
            console.log('in add info reducer');
            state.aboutyouData = action.payload;
            console.log('data in reducer of addInfo', state.aboutyouData);
        }
    }
});

export const {addAboutyouInfo} = AboutYou.actions;

export default AboutYou.reducer;