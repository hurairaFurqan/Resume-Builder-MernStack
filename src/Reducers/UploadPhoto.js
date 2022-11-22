import { createSlice } from "@reduxjs/toolkit";



export const UploadPhoto = createSlice({
    name: "uploadPhoto",
    initialState: {
        photoData: []
    },
    reducers: {
        addphotoInfo: (state, action) => {
            console.log('in add info reducer');
            state.photoData = action.payload;
            console.log('data in reducer of addInfo', state.photoData);
        }
    }
});

export const {addphotoInfo} = UploadPhoto.actions;

export default UploadPhoto.reducer;