import { Button } from "react-bootstrap";
import "./style.css";
import ClearIcon from "@mui/icons-material/Clear";

const Popup = (props) => {
  const handleClose = (e) => {
    props.setTrigger(false);
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        {props.children}
        <Button className="close-btn" onClick={handleClose}>
          <ClearIcon fontSize="small"></ClearIcon>
        </Button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
