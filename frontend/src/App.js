import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Pages/Header";
import Coverletter from "./Pages/Coverletter";
import GrammarCheck from "./Pages/GrammarCheck";
import Resume from "./Pages/Resume";
import Sop from "./Pages/Sop";
function App() {
  return (
    <>
      <Header />
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
