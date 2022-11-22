import React, { useState } from "react";

import Select from "@mui/material/Select";
import { FormControl, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "react-bootstrap";

function LanguageForm(props) {
  const [languageForm, setLanguageForm] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLanguageForm((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('in language form',languageForm);
    // props.setLanguages(data => [
    //     ...data,
    //     {
    //         id: data.length + 1,
    //         langName: languageForm.langName,
    //         langProficiency: languageForm.langProficiency,
    //         COMPONENT: LanguageForm
    //     }
    // ])
  };

  return (
    <>
      <div className="container">
        

        <form onSubmit={handleSubmit}>
          <div className="row align-items-baseline mb-4 mt-4">
            <div className="col">
              <TextField
                id="standard-basic"
                name="languageName"
                label="Name"
                variant="standard"
                size="small"
                value={languageForm.languageName || ""}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="col">
              <FormControl size="small">
                <InputLabel id="langProficiency">Proficiency</InputLabel>
                <Select
                  labelId="langProficiency"
                  id="langProficiency"
                  label="Proficiency"
                  name="langProficiency"
                  value={languageForm.langProficiency || "Advanced"}
                  onChange={(e) => handleChange(e)}
                >
                  <MenuItem value={"Advanced"}>Advanced</MenuItem>
                  <MenuItem value={"Intermediate"}>Intermediate</MenuItem>
                  <MenuItem value={"Novice"}>Novice</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col">
              <Button type="submit">Add</Button>
            </div>
          </div>
          {/* 
          <div className="row container mb-4">
            <Button type="submit">Save</Button>
          </div> */}
        </form>
      </div>
    </>
  );
}

export default LanguageForm;
