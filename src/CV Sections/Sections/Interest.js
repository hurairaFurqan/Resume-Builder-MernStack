import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "react-bootstrap";

function Interest(props) {
  const [interest, setInterest] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInterest((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(interest);
  };
  return (
    <>
      <div className="container">
        <p style={{color: "#F2A654"}}> Showcase your custom details for Interest</p>
        <form onSubmit={handleSubmit}>
          <div className="container-fluid d-flex flex-column mt-4 mb-4">
            <TextField
              id="standard-basic"
              label="Description"
              name="decription"
              className="mb-3"
              variant="standard"
              multiline
              value={interest.decription || ""}
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

export default Interest;
