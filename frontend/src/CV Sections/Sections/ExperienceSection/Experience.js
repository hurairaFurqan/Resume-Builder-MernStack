import React, { useState } from "react";
import { Button, Stack } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import Popup from "../../../Utilities/Popup";
import WorkExperienceItem from "../ExperienceSection/WorkExperienceItem";
import { useSelector } from "react-redux";
const { v4: uuidv4 } = require("uuid");
function Experience(props) {
  const { experienceData } = useSelector((state) => state.experience);
  const [popupInfo, setPopupInfo] = useState([]);
  const [newExperience, setNewExperience] = useState(
    experienceData.experience || []
  );
  const [trigger, setTrigger] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPopupInfo((values) => ({ ...values, [name]: value }));
  };

  const handleNewExp = () => {
    setTrigger(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (popupInfo) {
      const { jobTitle, companyName } = popupInfo;
      setNewExperience((exp) => [
        ...exp,
        {
          id: uuidv4(),
          jobTitle: jobTitle,
          companyName: companyName,
        },
      ]);
    }
    setTrigger(false);
    setPopupInfo("");
  };
  return (
    <>
      <div className="container mb-4">
        <p style={{ color: "#F2A654" }}>
          Enter your work experience in chronological order
        </p>

        {newExperience !== null && (
          <Stack gap={4}>
            {newExperience.map((item) => {
              return (
                <WorkExperienceItem
                  key={item._id}
                  {...item}
                ></WorkExperienceItem>
              );
            })}
          </Stack>
        )}

        <div className="d-flex flex-row justify-content-center mt-3">
          <Button onClick={handleNewExp}>Add Work Experience</Button>
        </div>

        <div>
          <Popup trigger={trigger} setTrigger={setTrigger}>
            <h2>Resume Builder</h2>
            <p>Please enter information accordingly</p>

            <form onSubmit={handleSubmit}>
              <div className="container-fluid d-flex flex-column mb-4">
                <TextField
                  required
                  id="standard-basic"
                  label="Job Title"
                  name="jobTitle"
                  className="mb-2 mt-3"
                  variant="standard"
                  value={popupInfo.jobTitle || ""}
                  onChange={(e) => handleChange(e)}
                />
                <TextField
                  required
                  id="standard-basic"
                  label="Company Name"
                  name="companyName"
                  className="mb-2 mt-3"
                  variant="standard"
                  value={popupInfo.companyName || ""}
                  onChange={(e) => handleChange(e)}
                />

                <Button className="mt-3" type="submit">
                  Submit
                </Button>
              </div>
            </form>
          </Popup>
        </div>
      </div>
    </>
  );
}
export default Experience;
