import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Pages/Header";
import Coverletter from "./Pages/Coverletter";
import GrammarCheck from "./Pages/GrammarCheck";
import Resume from "./Pages/Resume";
import Sop from "./Pages/Sop";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getMe } from "./Store/AuthRequests";
import { getAboutYou } from "./Store/AboutYouRequests";
import { getPersonalInfo } from "./Store/PersonalInfoRequests";
import { getContactDetails } from "./Store/ContactDetailsRequests";
import { getInterest } from "./Store/InterestRequests";
function App() {
  console.log('app init')
  const dispatch = useDispatch();

  const [success, setSuccess] = useState(false);
  useEffect(() => {
    console.log("use Effect init in app[getMe]");
    dispatch(getMe());
  }, []);
  useEffect(() => {
    console.log("use Effect init in app[success]");
    if (success) {
      console.log("use Effect init in app[success condition successfull]");
      dispatch(getPersonalInfo());
      dispatch(getAboutYou());
      dispatch(getContactDetails());
      dispatch(getInterest());
    }
  }, [success]);

  const handleSuccess = (state) => {
    setSuccess(state);
  };
  return (
    <>
      <Header handleSuccess={handleSuccess} />
      <Routes>
        <Route path="/" element={<Resume />}></Route>
        <Route path="/coverLetter" element={<Coverletter />}></Route>
        <Route path="/sop" element={<Sop />}></Route>
        <Route path="/grammarCheck" element={<GrammarCheck />}></Route>
      </Routes>
    </>
  );
}

export default App;
