import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Pages/Layout";
import Coverletter from "./Pages/Coverletter";
import Download from "./Pages/Download";
import GrammarCheck from "./Pages/GrammarCheck";
import Resume from "./Pages/Resume";
import Sop from "./Pages/Sop";
function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Resume />}></Route>
        <Route path="/coverLetter" element={<Coverletter />}></Route>
        <Route path="/sop" element={<Sop />}></Route>
        <Route path="/download" element={<Download />}></Route>
        <Route path="/grammarCheck" element={<GrammarCheck />}></Route>
      </Routes>
    </>
  );
}

export default App;
