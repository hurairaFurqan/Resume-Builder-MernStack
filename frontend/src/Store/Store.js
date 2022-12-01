import { configureStore } from "@reduxjs/toolkit";
import AboutYou from "../Reducers/AboutYou";
import AuthRequests from "../Reducers/AuthRequests";
import ContactDetails from "../Reducers/ContactDetails";
import Educations from "../Reducers/Educations";
import Experience from "../Reducers/Experience";
import Interest from "../Reducers/Interest";
import Languages from "../Reducers/Languages";
import PersonalInfo from "../Reducers/Personalnfo";
import UploadPhoto from "../Reducers/UploadPhoto";

const Store = configureStore({
  reducer: {
    personalInfo: PersonalInfo,
    contactDetails: ContactDetails,
    aboutYou: AboutYou,
    uploadPhoto: UploadPhoto,
    experience: Experience,
    education: Educations,
    interest: Interest,
    language: Languages,
    authRequests: AuthRequests,
  },
});

export default Store;
