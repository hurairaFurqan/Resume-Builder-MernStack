import React, { useState } from "react";
import { Button, Stack } from "react-bootstrap";
import TextField from "@mui/material/TextField";

import EducationItems from "./EducationItems";
import Popup from "../../../Utilities/Popup";

function Educations(props) {
  const [popupInfo, setPopupInfo] = useState([]);
  const [newEducation, setNewEducation] = useState([]);
  const [trigger, setTrigger] = useState(false);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPopupInfo((values) => ({ ...values, [name]: value }));
  };

  const handleNewExp = () => {
    setTrigger(true);
  };
  return (
    <>
      <div className="container mb-4">
        <p style={{ color: "#F2A654" }}>
          Enter your Education in chronological order
        </p>

        {newEducation !== null && (
          <Stack gap={4}>
            {newEducation.map((item) => {
              return (
                <EducationItems
                  key={item.id}
                  {...item}
                ></EducationItems>
              );
            })}
          </Stack>
        )}

        <div className="d-flex flex-row justify-content-center mt-3">
          <Button onClick={handleNewExp}>Add Education</Button>
        </div>

        <div>
          <Popup trigger={trigger} setTrigger={setTrigger} educationData = {popupInfo} setNewEducation = {setNewEducation} >
            <h2>Resume Builder</h2>
            <p>Please enter information accordingly</p>
            <div className="container-fluid d-flex flex-column mb-4">
              <TextField
                id="standard-basic"
                label="Education with specialization"
                name="degreeName"
                className="mb-2 mt-3"
                variant="standard"
                value={popupInfo.degreeName || ""}
                onChange={(e) => handleChange(e)}
              />
              <TextField
                id="standard-basic"
                label="Institue Name"
                name="instituteName"
                className="mb-2 mt-3"
                variant="standard"
                value={popupInfo.instituteName || ""}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </Popup>
        </div>
      </div>
    </>
  );
}
export default Educations;
