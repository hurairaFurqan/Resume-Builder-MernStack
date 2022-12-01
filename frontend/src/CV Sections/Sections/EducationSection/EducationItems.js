import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import ImageThumbnail from "../../../Utilities/ImageThumbnail";
import ClearIcon from "@mui/icons-material/Clear";

import { useDispatch } from "react-redux";
import { removeEducationInfo } from "../../../Reducers/Educations";
import EducationForm from "./EducationForm";

function EducationItems(props) {
  const dispatch = useDispatch();
  const { id, degreeName, instituteName } = props;
  const [open, setOpen] = useState(false);

  const clearItem = () => {
    dispatch(removeEducationInfo(id));
  }
  return (
    <>
      
        <button
          className="btn"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="form-component-control"
          style={{ backgroundColor: "#ededed" }}
        >
          
          <div className="row">
            <div className="col-2 d-flex align-items-center">
              <div className="">
                <ImageThumbnail name={degreeName}></ImageThumbnail>
              </div>
            </div>

            <div className="col">
              <span style={{ fontSize: "1.2rem" }}>{degreeName}</span>
              <br></br>
              <span style={{ fontSize: ".8rem" }}>{instituteName}</span>
            </div>
            <div className="col-2 d-flex align-items-center">
              <button className="btn" onClick={clearItem}>
                <ClearIcon fontSize="small"></ClearIcon>
              </button>
            </div>
          </div>
        </button>

        <Collapse in={open}>
          <div id="form-component-control">
            <EducationForm key={id} {...props} />
          </div>
        </Collapse>
    </>
  );
}
export default EducationItems;
