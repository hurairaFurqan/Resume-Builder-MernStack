import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import ImageThumbnail from "../../../Utilities/ImageThumbnail";


function EducationItems(props) {
  const { id, degreeName, instituteName, COMPONENT } = props;
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
          <div className="ms-3">
          <ImageThumbnail name={degreeName}></ImageThumbnail>
          </div>
          <span style={{ fontSize: "1.2rem" }}>{degreeName}</span>
          <br></br>
          <span style={{ fontSize: ".8rem" }}>{instituteName}</span>
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
export default EducationItems;
