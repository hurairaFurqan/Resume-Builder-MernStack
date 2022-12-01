import { createSlice } from "@reduxjs/toolkit";



export const Interest = createSlice({
    name: "Interest",
    initialState: {
        interestData: []
    },
    reducers: {
        addInterestInfo: (state, action) => {
            state.interestData = action.payload;
        }
    }
});

export const {addInterestInfo} = Interest.actions;

export default Interest.reducer;