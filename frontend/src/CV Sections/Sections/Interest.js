import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addInterestInfo } from "../../Reducers/Interest";

function Interest(props) {
  const dispatch = useDispatch();
  const {interestData} = useSelector(state => state.interest);
  const [interest, setInterest] = useState({
    description : interestData.description || '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInterest((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addInterestInfo(interest))
  };
  return (
    <>
      <div className="container">
        <p style={{ color: "#F2A654" }}>
          {" "}
          Showcase your custom details for Interest
        </p>
        <form onSubmit={handleSubmit}>
          <div className="container-fluid d-flex flex-column mt-4 mb-4">
            <TextField
              id="standard-basic"
              label="Description"
              name="description"
              className="mb-3"
              variant="standard"
              multiline
              value={interest.description || ""}
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
