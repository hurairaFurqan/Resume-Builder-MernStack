import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LinkIcon from "@mui/icons-material/Link";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { downloadReumse } from "../Reducers/AuthRequests";

// import { html2canvas, jsPDF } from "app/ext";

function PreviewForm(props) {
  const dispatch = useDispatch();
  const { downloadResume } = useSelector((state) => state.authRequests);
  const { personalData } = useSelector((state) => state.personalInfo);

  const { contactData } = useSelector((state) => state.contactDetails);

  const { firstName, lastName, gender, martialStatus, dob, nationality } =
    personalData;

  const { address, mobileNumber, email } = contactData;
  const { aboutyouData } = useSelector((state) => state.aboutYou);

  const { experienceData } = useSelector((state) => state.experience);

  const { educationData } = useSelector((state) => state.education);

  const { interestData } = useSelector((state) => state.interest);

  if (downloadResume === true) {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    });

    dispatch(downloadReumse(false));
  }

  return (
    <div id="divToPrint">
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
            <div>Start Filling Forms in Sections To Build Resume</div>
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
            {aboutyouData ? (
              <div>
                <h5>Objective</h5>

                {`${aboutyouData.summary}`}
                <hr />
              </div>
            ) : (
              <></>
            )}

            {experienceData.length ? (
              <div>
                <h5>Work Experience</h5>

                <div>
                  {experienceData.map((item) => {
                    return (
                      <div key={item.id} className="mt-2">
                        <h5>{item.companyName}</h5>

                        <div>
                          {`${item.jobTitle || ""} |  ${
                            item.workLocation || ""
                          } | ${item.startMonth || ""} ${
                            item.startYear || ""
                          } - ${
                            !item.isPresent
                              ? `${item.endMonth || ""} ${item.endYear || ""}`
                              : `Present`
                          }`}
                          <br /> <br />
                          {`${item.description}`}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <hr />
              </div>
            ) : (
              <></>
            )}

            {educationData.length ? (
              <div>
                <h5>Education</h5>

                <div>
                  {educationData.map((item) => {
                    return (
                      <div key={item.id} className="mt-2">
                        <h5>{item.instituteName}</h5>

                        <div>
                          {`${item.degreeName || ""} |  ${
                            item.location || ""
                          } |${item.percentage || ""}
                          | ${item.startMonth || ""} ${
                            item.startYear || ""
                          } - ${
                            !item.isPresent
                              ? `${item.endMonth || ""} ${item.endYear || ""}`
                              : `Present`
                          }`}
                          <br /> <br />
                          {`${item.description}`}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <hr />
              </div>
            ) : (
              <></>
            )}

            {interestData.length ? (
              <div>
                <h5>Interest</h5>
                {`${interestData.description ? interestData.description : ""}`}
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="col-4">
            {personalData ? (
              <div>
                <h5>Personal Details</h5>

                <div>
                  Gender :{gender}
                  <br></br>
                  Nationality :{nationality}
                  <br></br>
                  Martial Status :{martialStatus}
                  <br></br>
                </div>
                <hr />
              </div>
            ) : (
              <></>
            )}

            {contactData ? (
              <div>
                <h5>Social Links</h5>
                <div>
                  <GitHubIcon fontSize="small"></GitHubIcon>
                  {contactData.githubUrl}
                  <br></br>
                  <LinkedInIcon fontSize="small"></LinkedInIcon>
                  {contactData.linkedinUrl}
                  <br></br>
                  <LinkIcon fontSize="small"></LinkIcon>
                  {contactData.additionalUrl}
                </div>

                <hr />
              </div>
            ) : (
              <>Helo here</>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewForm;
