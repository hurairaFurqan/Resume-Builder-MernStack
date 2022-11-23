import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addContactInfo } from "../../Reducers/ContactDetails";
function ContactDetails(props) {
  const dispatch = useDispatch();

  const { contactData } = useSelector((state) => state.contactDetails);
  const [contactDetails, setContactDetails] = useState({
    mobileNumber: contactData.mobileNumber || "",
    address: contactData.address || "",
    email: contactData.email || "",
    additionalUrl: contactData.additionalUrl || "",
    linkedinUrl: contactData.linkedinUrl || "",
    githubUrl: contactData.githubUrl || "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactDetails((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContactInfo(contactDetails));
  };

  return (
    <>
      <div className="container">
        <p style={{ color: "#F2A654" }}>Enter your Contact Details</p>
        <form onSubmit={handleSubmit}>
          <div className="container-fluid d-flex flex-column mt-4 mb-4">
            <TextField
              id="standard-basic"
              name="mobileNumber"
              className="mb-3"
              label="Mobile Number"
              variant="standard"
              value={contactDetails.mobileNumber || ""}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="standard-basic"
              label="Address"
              name="address"
              className="mb-3"
              variant="standard"
              value={contactDetails.address || ""}
              onChange={(e) => handleChange(e)}
            />

            <TextField
              id="standard-basic"
              name="email"
              className="mb-3"
              type="email"
              label="Email ID"
              variant="standard"
              value={contactDetails.email || ""}
              onChange={(e) => handleChange(e)}
            />

            <TextField
              id="standard-basic"
              label="Linkedin URL"
              name="linkedinUrl"
              className="mb-3"
              variant="standard"
              value={contactDetails.linkedinUrl || ""}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="standard-basic"
              name="githubUrl"
              className="mb-3"
              label="Github URL"
              variant="standard"
              value={contactDetails.githubUrl || ""}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="standard-basic"
              label="Additional URL"
              name="additionalUrl"
              className="mb-3"
              variant="standard"
              value={contactDetails.additionalUrl || ""}
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

export default ContactDetails;
