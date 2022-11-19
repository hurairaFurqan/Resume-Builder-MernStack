import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import { Button } from "react-bootstrap";
function UploadPhoto(props) {
  const hiddenFileInput = useRef(null);
  const [image, setImage] = useState({});

  const handleImage = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };
  const selectPhoto = (e) => {
    hiddenFileInput.current.click();
  };

  const handleUpload = (e) => {
    e.preventDefault();
    console.log(image);
  };
  return (
    <>
      <div className="container mb-4">
        <p style={{ color: "#F2A654" }}>Add your Photo</p>
        <Box
          className="shadow rounded"
          sx={{
            width: "305px",
            height: "auto",
            backgroundColor: "light",
          }}
        >
          <div>
            <div >
              {image.preview ? (
                <img
                  src={image.preview}
                  alt="loading..."
                  className="img-thumbnail img-fluid"
                  style={{
                    objectFit: "cover",
                  }}
                />
              ) : (
                <>
                  <h5 className="d-flex justify-content-center">
                    Select your Image
                  </h5>
                </>
              )}
            </div>
            <div className="d-flex flex-row justify-content-center mb-3">
              <Button className="mt-4" onClick={selectPhoto}>
                {" "}
                Select your Photo
              </Button>
              <input
                type={"file"}
                ref={hiddenFileInput}
                style={{ display: "none" }}
                onChange={handleImage}
              ></input>

              <Button
                className="mt-4 ms-2"
                id="upload-button"
                onClick={handleUpload}
              >
                Upload
              </Button>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
}

export default UploadPhoto;
