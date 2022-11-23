import React from "react";
import { useSelector } from "react-redux";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";

function PreviewForm(props) {
  const { personalData } = useSelector((state) => state.personalInfo);

  const { contactData } = useSelector((state) => state.contactDetails);

  const { firstName, lastName, gender, martialStatus, dob, nationality } =
    personalData;

  const { address, mobileNumber, email } = contactData;
  const { aboutyouData } = useSelector((state) => state.aboutYou);

  const { summary } = aboutyouData;

  const { experienceData } = useSelector((state) => state.experience);

  return (
    <>
      <div className="p-5">
        <div
          style={{
            fontSize: "30px",
            letterSpacing: "5px",
            lineHeight: "1",
          }}
        >
          {firstName && lastName ? (
            <div>{`${firstName} ${lastName}`}</div>
          ) : (
            <div>Personal Info</div>
          )}
        </div>

        <div
          className="mt-2"
          style={{
            fontSize: "14px",
            lineHeight: "1",
            fontFamily: "",
          }}
        >
          {address ? (
            <div>
              <LocationOnIcon fontSize="small"></LocationOnIcon>

              {`${address}`}
            </div>
          ) : (
            <div></div>
          )}
        </div>

        <div
          className="mt-1 d-flex flex-row"
          style={{
            fontSize: "14px",
            lineHeight: "1",
            fontFamily: "",
          }}
        >
          {dob ? <div>{`DOB: ${dob}`}</div> : <div></div>}

          {mobileNumber ? (
            <div>
              <PhoneIcon fontSize="small"></PhoneIcon>

              {`${mobileNumber}`}
            </div>
          ) : (
            <div></div>
          )}

          {email ? (
            <div>
              <EmailIcon fontSize="small"></EmailIcon>

              {`${email}`}
            </div>
          ) : (
            <div></div>
          )}
        </div>

        <hr></hr>

        <div className="row">
          <div className="col-8">
            {summary ? (
              <div>
                <h5>Objective</h5>

                {`${summary}`}
                <hr />
              </div>
            ) : (
              <div>Objective</div>
            )}

            {experienceData ? (
              <div>
                <h5>Experience</h5>

                <div>
                  {experienceData.map((item) => {
                    
                    return (
                      
                      <div key={item.id}>
                        
                        <h5>{item.companyName}</h5>

                        <div>{`${item.jobTitle || ""} |  ${
                          item.workLocation || ""
                        } | ${item.startMonth || ""} ${item.startYear || ""}-${
                          item.endMonth || ""
                        } ${item.endYear || ""}`}</div>
                      </div>
                    );
                  })}
                </div>
                <hr />
              </div>
            ) : (
              <div>Objective</div>
            )}
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
}

export default PreviewForm;
