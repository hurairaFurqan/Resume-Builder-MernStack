import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "react-bootstrap";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import months from "../../Data/months.json";
import years from "../../Data/years.json";
import { useDispatch } from "react-redux";
import { createExperience } from "../../../Store/experienceRequests";

// function WorkForm({jobTitle = ''}) {
function WorkForm(props) {
  const dispatch = useDispatch();

  const { id, jobTitle, companyName } = props;
  const [workFormData, setWorkFormData] = useState({
    id: id,
    jobTitle: jobTitle || "",
    companyName: companyName || "",
    startMonth: props.startMonth || "",
    endMonth: props.endMonth || "",
    startYear: props.startYear || "",
    endYear: props.endYear || "",
    workLocation: props.workLocation || "",
    isPresent: props.isPresent || "",
    description: props.description || "",
  });
  const handleChange = (e) => {
    if (e.target.name === "jobTitle" && !jobTitle) {
      setWorkFormData((values) => ({ ...values, [e.target.name]: jobTitle }));
    }
    const { name, value } = e.target;
    setWorkFormData((values) => ({ ...values, [name]: value }));
  };

  const handleCheckBox = (e) => {
    setWorkFormData((values) => ({
      ...values,
      [e.target.name]: e.target.checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createExperience(workFormData));
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="container-fluid d-flex flex-column mb-4">
            <TextField
              required
              id="standard-basic"
              label="Job Title"
              name="jobTitle"
              className="mb-2 mt-3"
              variant="standard"
              value={workFormData.jobTitle || ""}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              required
              id="standard-basic"
              label="Company Name"
              name="companyName"
              className="mb-2 mt-3"
              variant="standard"
              value={workFormData.companyName || ""}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              required
              id="standard-basic"
              label="Location"
              name="workLocation"
              className="mb-2 mt-3"
              variant="standard"
              value={workFormData.workLocation || ""}
              onChange={(e) => handleChange(e)}
            />

            <div className="row mb-4">
              <div className="col-sm-6">
                <InputLabel id="startMonth">Start Month</InputLabel>
                <Select
                  required
                  labelId="startMonth"
                  id="startMonth"
                  name="startMonth"
                  value={workFormData.startMonth || "January"}
                  label="startMonth"
                  onChange={(e) => handleChange(e)}
                >
                  {months.map((mon) => {
                    return (
                      <MenuItem key={mon.month} value={mon.month}>
                        {mon.month}
                      </MenuItem>
                    );
                  })}
                </Select>
              </div>
              <div className="col-sm-6">
                <InputLabel id="startYear">Year</InputLabel>
                <Select
                  required
                  labelId="startYear"
                  id="startYear"
                  label="startYear"
                  name="startYear"
                  value={workFormData.startYear || "2012"}
                  onChange={(e) => handleChange(e)}
                >
                  {years.map((y) => {
                    return (
                      <MenuItem key={y.year} value={y.year}>
                        {y.year}
                      </MenuItem>
                    );
                  })}
                </Select>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-sm-6">
                <InputLabel id="endMonth">End Month</InputLabel>
                <Select
                  required
                  labelId="endMonth"
                  disabled={workFormData.isPresent === true ? true : false}
                  id="endMonth"
                  name="endMonth"
                  value={workFormData.endMonth || "December"}
                  label="endMonth"
                  onChange={(e) => handleChange(e)}
                >
                  {months.map((mon) => {
                    return (
                      <MenuItem key={mon.month} value={mon.month}>
                        {mon.month}
                      </MenuItem>
                    );
                  })}
                </Select>
              </div>
              <div className="col-sm-6">
                <InputLabel id="endYear">Year</InputLabel>
                <Select
                  labelId="endYear"
                  disabled={workFormData.isPresent === true ? true : false}
                  id="endYear"
                  label="endYear"
                  name="endYear"
                  value={workFormData.endYear || "2023"}
                  onChange={(e) => handleChange(e)}
                >
                  {years.map((y) => {
                    return (
                      <MenuItem key={y.year} value={y.year}>
                        {y.year}
                      </MenuItem>
                    );
                  })}
                </Select>
              </div>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked={false}
                    label="Present"
                    value={workFormData.isPresent || "false"}
                    name="isPresent"
                    inputProps={{ "aria-label": "controlled" }}
                    onChange={(e) => handleCheckBox(e)}
                    size="small"
                  />
                }
                label="Present"
              />
            </div>

            <TextField
              required
              label="Description"
              name="description"
              className="mb-3"
              variant="outlined"
              multiline
              value={workFormData.description || ""}
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

export default WorkForm;
