import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addInfo } from "../../Reducers/Personalnfo";

function PersonalInfo(props) {
  const { personalData } = useSelector((state) => state.personalInfo);
  console.log("personal Info fetched from redux store", personalData);
  const dispatch = useDispatch();
  const [personalInfo, setPersonalInfo] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addInfo(personalInfo));
  };

  return (
    <>
      <div className="container">
        <p style={{ color: "#F2A654" }}>Enter your personal Details</p>
        <form onSubmit={handleSubmit}>
          <div className="row mt-4 mb-4">
            <div className="col-sm-6">
              <TextField
                id="standard-basic"
                name="firstName"
                label="First Name"
                variant="standard"
                value={personalInfo.firstName || ""}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="col-sm-6">
              <TextField
                id="standard-basic"
                label="Last Name"
                name="lastName"
                variant="standard"
                value={personalInfo.lastName || ""}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="mb-4">
            <TextField
              name="dob"
              label="Date of Birth"
              type={"date"}
              value={personalInfo.dob || "2000-11-11"}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="row mb-4">
            <div className="col-sm-6">
              <InputLabel id="gender">Gender</InputLabel>
              <Select
                labelId="gender"
                id="gender"
                name="gender"
                value={personalInfo.gender || "Male"}
                label="Gender"
                onChange={(e) => handleChange(e)}
              >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
              </Select>
            </div>
            <div className="col-sm-6">
              <InputLabel id="martialStatus">Martial Status</InputLabel>
              <Select
                labelId="martialStatus"
                id="martialStatus"
                label="Martial Status"
                name="martialStatus"
                value={personalInfo.martialStatus || "Single"}
                onChange={(e) => handleChange(e)}
              >
                <MenuItem value={"Single"}>Single</MenuItem>
                <MenuItem value={"Married"}>Married</MenuItem>
                <MenuItem value={"Divorced"}>Divorced</MenuItem>
              </Select>
            </div>
          </div>
          <div className="mb-4">
            <TextField
              id="standard-basic"
              label="Nationality"
              name="nationality"
              variant="standard"
              value={personalInfo.nationality || ""}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="row container mb-4">
            <Button type="submit">Save</Button>
          </div>
        </form>
      </div>

      <p>{`data is ${personalData}`}</p>
    </>
  );
}

export default PersonalInfo;
