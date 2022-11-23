import React, { useState } from "react";
import { Stack } from "react-bootstrap";
import MenuIcon from '@mui/icons-material/Menu';
import AboutYou from "../CV Sections/Sections/AboutYou";
import ContactDetails from "../CV Sections/Sections/ContactDetails";
import Educations from "../CV Sections/Sections/EducationSection/Educations";
import Experience from "../CV Sections/Sections/Experience";
import Interest from "../CV Sections/Sections/Interest";
import Languages from "../CV Sections/Sections/Languages/Languages";
import PersonalInfo from "../CV Sections/Sections/PersonalInfo";
import Skills from "../CV Sections/Sections/Skills";
import UploadPhoto from "../CV Sections/Sections/UploadPhoto";
import SectionItems from "../CV Sections/Components/SectionItems";
import sections from "../CV Sections/Data/sections.json";
import PreviewForm from "../Preview Section/PreviewForm";

const initalData = [
  { id: 1, COMPONENT: PersonalInfo },
  { id: 2, COMPONENT: ContactDetails },
  { id: 3, COMPONENT: AboutYou },
  { id: 4, COMPONENT: UploadPhoto },
  { id: 5, COMPONENT: Experience },
  { id: 6, COMPONENT: Educations },
  { id: 7, COMPONENT: Skills },
  { id: 8, COMPONENT: Interest },
  { id: 9, COMPONENT: Languages },
];
function Resume(props) {
  const [id, setID] = useState(-1);
  const [section, setSection] = useState(initalData);
  const getId = (id) => {
    setID(id);
  };
  const resetId = () => {
    setID(-1);
  };
  return (
    <>
      <div className="row bg-light">
        <div className="col-3 shadow-sm" style={{ backgroundColor: "white" }}>
          <div className="d-flex align-items-baseline mb-4">
            <button
              className="btn ms-2"
              onClick={resetId}
              style={{ backgroundColor: "#ededed" }}
            >
              <MenuIcon></MenuIcon>
            </button>
            <p className="ms-5">Your CV Sections</p>
          </div>
          <div>
            {id === -1 && (
              <Stack gap={4}>
                {sections.map((section) => (
                  <SectionItems key={section.id} {...section} getId={getId} />
                ))}
              </Stack>
            )}

            {section.map((section) => {
              if (id === section.id) {
                return <section.COMPONENT key={section.id} />;
              } else {
                return;
              }
            })}
          </div>
        </div>
        <div className="col-9 d-flex justify-content-center" >
          <div className="rounded mt-5" style={{ backgroundColor: "white", height:"50rem", width:"800px" }}>
            <PreviewForm></PreviewForm>
          </div>
        </div>
      </div>
    </>
  );
}
export default Resume;
