import React from "react";
import "./style.css";
function ImageThumbnail(props) {
  const { name } = props;
  const getInitial = () => {
    if (name) {
      return `${name[0]}`;
    } else {
      return "";
    }
  };
  return (
    <>
      {name && (
        <div
          disabled
          style={{ width: "3rem", height: "3rem", backgroundColor:"#0D6EFD", color: "white" ,position: "relative" }}
          className="rounded-circle d-flex flex-column  justify-content-center "
        >
          <span style={{ fontSize: "1.5rem" }}>{getInitial()}</span>
        </div>
      )}
    </>
  );
}

export default ImageThumbnail;
