import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "react-bootstrap";

function AboutYou(props) {
  const [aboutYou, setAboutYou] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAboutYou((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(aboutYou);
  };
  return (
    <>
      <div className="container">
        <p style={{color: "#F2A654"}}> Enter a brief description of your professional bacground</p>
        <form onSubmit={handleSubmit}>
          <div className="container-fluid d-flex flex-column mt-4 mb-4">
            <TextField
              id="standard-basic"
              label="Resume Headline"
              name="resumeHeadline"
              className="mb-5 mt-3"
              variant="standard"
              value={aboutYou.resumeHeadline || ""}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="standard-basic"
              label="Summary"
              name="summary"
              className="mb-3"
              variant="standard"
              multiline
              value={aboutYou.summary || ""}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="row container mb-4">
            <Button type="submit">Save</Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AboutYou;
