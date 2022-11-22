import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import ImageThumbnail from "../../Utilities/ImageThumbnail";

function WorkExperienceItem(props) {
  const { id, jobTitle, companyName, COMPONENT } = props;
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="d-flex flex-column">
        <button
          className="btn"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="form-component-control"
          style={{ backgroundColor: "#ededed" }}
        >
          <div className="d-flex justify-content-center">
          <ImageThumbnail name={jobTitle}></ImageThumbnail>
          </div>
          <span style={{ fontSize: "1.2rem" }}>{jobTitle}</span>
          <br></br>
          <span style={{ fontSize: ".8rem" }}>{companyName}</span>
        </button>

        <Collapse in={open}>
          <div id="form-component-control">
            <COMPONENT key={id} {...props}/>
          </div>
        </Collapse>
      </div>
    </>
  );
}
export default WorkExperienceItem;
