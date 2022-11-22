import { configureStore } from "@reduxjs/toolkit";
import AboutYou from "../Reducers/AboutYou";
import ContactDetails from "../Reducers/ContactDetails";
import Experience from "../Reducers/Experience";
import PersonalInfo  from "../Reducers/Personalnfo";
import UploadPhoto from "../Reducers/UploadPhoto";

const Store = configureStore({
    reducer: {
        personalInfo : PersonalInfo,
        contactDetails : ContactDetails,
        aboutYou : AboutYou,
        uploadPhoto: UploadPhoto,
        experience: Experience,
    },
});


export default Store;