import { createSlice } from "@reduxjs/toolkit";



export const PersonalInfo = createSlice({
    name: "personalInfo",
    initialState: {
        personalData: []
    },
    reducers: {
        addInfo: (state, action) => {
            console.log('in add info reducer');
            state.personalData = action.payload;
            console.log('data in reducer of addInfo', state.personalData);
        }
    }
});

export const {addInfo} = PersonalInfo.actions;

export default PersonalInfo.reducer;