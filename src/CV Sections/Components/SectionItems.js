import React from "react";

function SectionItems(props) {
  const { id, sectionName, description, imgUrl } = props;

  const getId = () => {
    props.getId(id);
  };
  return (
    <>
      <div className="d-flex flex-column align-item-center">
        <button
          onClick={getId}
          className="btn"
          style={{ backgroundColor: "#ededed" }}
        >
          <img src={imgUrl} className="mx-2" alt="loading..."></img>
          <span style={{ fontSize: "1rem" }}>{sectionName}</span>
          <br></br>
          <span style={{ fontSize: ".8rem" }}>{description}</span>
        </button>
      </div>
    </>
  );
}

export default SectionItems;
