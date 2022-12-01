import { createSlice } from "@reduxjs/toolkit";



export const UploadPhoto = createSlice({
    name: "uploadPhoto",
    initialState: {
        photoData: []
    },
    reducers: {
        addphotoInfo: (state, action) => {
            state.photoData = action.payload;
        }
    }
});

export const {addphotoInfo} = UploadPhoto.actions;

export default UploadPhoto.reducer;