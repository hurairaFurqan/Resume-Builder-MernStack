import React, { useState } from "react";
import { Button } from "react-bootstrap";
import LanguageForm from "./LanguageForm";

const initialData = [
  {
    id: 1,
    langName: "English",
    langProficiency: "Intermediate",
    COMPONENT: LanguageForm,
  },
];
function Languages(props) {
  const [languages, setLanguages] = useState();
  const [isShown, setIsShown] = useState(false);
  console.log("in languages", languages);
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  return (
    <>
      <div className="container">
        <p style={{ color: "#F2A654" }}>
          {" "}
          Showcase your custom details for language
        </p>

        <div>
          {languages !== undefined ? (
            languages.map((language) => {
              return (
                <language.COMPONENT
                  key={language.id}
                  setLanguages={setLanguages}
                />
              );
            })
          ) : (
            <div className="row container mb-4">
              <Button
                onClick={handleClick}
                hidden={isShown === true ? true : false}
              >
                Add
              </Button>
              {isShown && <LanguageForm setLanguages={setLanguages} />}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Languages;
