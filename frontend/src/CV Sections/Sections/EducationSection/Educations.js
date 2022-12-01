import React, { useState } from "react";
import { Button, Stack } from "react-bootstrap";
import TextField from "@mui/material/TextField";

import EducationItems from "./EducationItems";
import Popup from "../../../Utilities/Popup";
import { useSelector } from "react-redux";
const { v4: uuidv4 } = require("uuid");

function Educations(props) {
  const { educationData } = useSelector((state) => state.education);
  const [popupInfo, setPopupInfo] = useState([]);
  const [newEducation, setNewEducation] = useState(educationData);
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
      const { degreeName, instituteName } = popupInfo;
      props.setNewEducation((exp) => [
        ...exp,
        {
          id: uuidv4(),
          degreeName: degreeName,
          instituteName: instituteName,
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
          Enter your Education in chronological order
        </p>

        {newEducation !== null && (
          <Stack gap={4}>
            {newEducation.map((item) => {
              return <EducationItems key={item.id} {...item}></EducationItems>;
            })}
          </Stack>
        )}

        <div className="d-flex flex-row justify-content-center mt-3">
          <Button onClick={handleNewExp}>Add Education</Button>
        </div>

        <div>
          <Popup
            trigger={trigger}
            setTrigger={setTrigger}
          >
            <h2>Resume Builder</h2>
            <p>Please enter information accordingly</p>
            <form onSubmit={handleSubmit}>
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
export default Educations;
