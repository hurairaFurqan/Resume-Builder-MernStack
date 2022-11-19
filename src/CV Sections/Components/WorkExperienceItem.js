import React, { useState } from "react";
import { Collapse } from "react-bootstrap";

function WorkExperienceItem(props) {
  const { id, jobTitle, companyName, COMPONENT } = props;
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="d-flex flex-column align-item-center">
        <button
          className="btn"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="form-component-control"
          style={{ backgroundColor: "#ededed" }}
        >
          <img className="mx-2" alt="loading..."></img>
          <span style={{ fontSize: "1rem" }}>{jobTitle}</span>
          <br></br>
          <span style={{ fontSize: ".8rem" }}>{companyName}</span>
        </button>

        <Collapse in={open}>
          <div id="form-component-control">
            <COMPONENT key={id} />
          </div>
        </Collapse>
      </div>
    </>
  );
}
export default WorkExperienceItem;
