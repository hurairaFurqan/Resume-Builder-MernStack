import { createSlice } from "@reduxjs/toolkit";



export const ContactDetails = createSlice({
    name: "contactDetails",
    initialState: {
        contactData: []
    },
    reducers: {
        addContactInfo: (state, action) => {
            console.log('in add info reducer');
            state.contactData = action.payload;
            console.log('data in reducer of addInfo', state.contactData);
        }
    }
});

export const {addContactInfo} = ContactDetails.actions;

export default ContactDetails.reducer;