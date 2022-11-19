import React, { useState } from "react";
import { Button, Stack } from "react-bootstrap";
import WorkExperienceItem from "../Components/WorkExperienceItem";
import WorkForm from "../Components/WorkForm";

function Experience(props) {
  const [newExperience, setNewExperience] = useState([]);
  const handleNewExp = () => {
    setNewExperience((exp) => [
      ...exp,
      {
        id: exp.length + 1,
        COMPONENT: WorkForm,
        jobTitle: "Job Title",
        companyName: "Company Name",
      },
    ]);
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
                  key={item.id}
                  {...item}
                ></WorkExperienceItem>
              );
            })}
          </Stack>
        )}

        <div className="d-flex flex-row justify-content-center mt-3">
          <Button onClick={handleNewExp}>Add Work Experience</Button>
        </div>
      </div>
    </>
  );
}
export default Experience;
