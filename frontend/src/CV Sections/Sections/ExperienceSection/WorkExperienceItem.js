import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import ImageThumbnail from "../../../Utilities/ImageThumbnail";
import ClearIcon from "@mui/icons-material/Clear";
import WorkForm from "../ExperienceSection/WorkForm";
import { useDispatch } from "react-redux";
import { removeExperienceInfo } from "../../../Reducers/Experience";

function WorkExperienceItem(props) {
  const dispatch = useDispatch();
  const { id, jobTitle, companyName } = props;
  const [open, setOpen] = useState(false);

  // const clearItem = () => {
  //   dispatch(removeExperienceInfo(id));
  // }
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
                <ImageThumbnail name={jobTitle}></ImageThumbnail>
              </div>
            </div>

            <div className="col">
              <span style={{ fontSize: "1.2rem" }}>{jobTitle}</span>
              <br></br>
              <span style={{ fontSize: ".8rem" }}>{companyName}</span>
            </div>
            {/* <div className="col-2 d-flex align-items-center">
              <button className="btn" onClick={clearItem}>
                <ClearIcon fontSize="small"></ClearIcon>
              </button>
            </div> */}
          </div>
        </button>

        <Collapse in={open}>
          <div id="form-component-control">
            <WorkForm key={id} {...props} />
          </div>
        </Collapse>
    </>
  );
}
export default WorkExperienceItem;
