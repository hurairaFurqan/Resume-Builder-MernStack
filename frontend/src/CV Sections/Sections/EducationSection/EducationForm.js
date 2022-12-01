import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "react-bootstrap";
import months from '../../Data/months.json';
import years from '../../Data/years.json';
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import {useDispatch} from 'react-redux';
import { addEducationInfo } from "../../../Reducers/Educations";

function EducationForm(props) {
  const dispatch = useDispatch();
  const { id, degreeName, instituteName } = props;
  const [educationFormData, setEducationFormData] = useState({
    id: id,
    degreeName: degreeName || "",
    instituteName: instituteName || "",
    startMonth: props.startMonth || "",
    endMonth: props.endMonth || "",
    startYear: props.startYear || "",
    endYear: props.endYear || "",
    location: props.location || "",
    isPresent: props.isPresent || "",
    description: props.description || "",
    percentage: props.percentage || "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducationFormData((values) => ({ ...values, [name]: value }));
  };

  const handleCheckBox = (e) => {
    setEducationFormData((values) => ({
      ...values,
      [e.target.name]: e.target.checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEducationInfo(educationFormData));
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="container-fluid d-flex flex-column mb-4">
            <TextField
              id="standard-basic"
              label="Education with specialization"
              name="degreeName"
              className="mb-2 mt-3"
              variant="standard"
              value={educationFormData.degreeName || ""}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="standard-basic"
              label="Institue Name"
              name="instituteName"
              className="mb-2 mt-3"
              variant="standard"
              value={educationFormData.instituteName || ""}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="standard-basic"
              label="Percentage/CGPA(eg. 80% / 9.0 CGPA)"
              name="percentage"
              className="mb-2 mt-3"
              variant="standard"
              value={educationFormData.percentage || ""}
              onChange={(e) => handleChange(e)}
            />

            <TextField
              id="standard-basic"
              label="Location (mention City & State only)"
              name="location"
              className="mb-2 mt-3"
              variant="standard"
              value={educationFormData.location || ""}
              onChange={(e) => handleChange(e)}
            />

            <div className="row mb-4">
              <div className="col-sm-6">
                <InputLabel id="startMonth">Start Month</InputLabel>
                <Select
                  labelId="startMonth"
                  id="startMonth"
                  name="startMonth"
                  value={educationFormData.startMonth || "January"}
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
                  labelId="startYear"
                  id="startYear"
                  label="startYear"
                  name="startYear"
                  value={educationFormData.startYear || "2012"}
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
                  labelId="endMonth"
                  disabled={educationFormData.isPresent === true ? true : false}
                  id="endMonth"
                  name="endMonth"
                  value={educationFormData.endMonth || "December"}
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
                  disabled={educationFormData.isPresent === true ? true : false}
                  id="endYear"
                  label="endYear"
                  name="endYear"
                  value={educationFormData.endYear || "2023"}
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
              label="Description"
              name="description"
              className="mb-3"
              variant="outlined"
              multiline
              value={educationFormData.description || ""}
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

export default EducationForm;
