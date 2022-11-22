import { Button } from "react-bootstrap";
import WorkForm from "../CV Sections/Components/WorkForm";
import EducationForm from "../CV Sections/Sections/EducationSection/EducationForm";
import "./style.css";

const Popup = (props) => {
  const handleClose = (e) => {
    props.setTrigger(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.educationData) {
      const { degreeName, insituteName } = props.educationData;
      props.setNewEducation((exp) => [
        ...exp,
        {
          id: exp.length + 1,
          COMPONENT: EducationForm,
          degreeName: degreeName,
          insituteName: insituteName,
        },
      ]);
    }
    if (props.experienceData) {
      const { jobTitle, companyName } = props.experienceData;
      props.setNewExperience((exp) => [
        ...exp,
        {
          id: exp.length + 1,
          COMPONENT: WorkForm,
          jobTitle: jobTitle,
          companyName: companyName,
        },
      ]);
    }

    props.setTrigger(false);
  };
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <form onSubmit={handleSubmit}>
          {props.children}
          <Button className="close-btn" onClick={handleClose}>
            Close
          </Button>
          <Button className="" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
