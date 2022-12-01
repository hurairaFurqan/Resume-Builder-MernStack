import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import LanguageForm from "./LanguageForm";

function Languages(props) {
  const { languageData } = useSelector((state) => state.language);
  const [languages, setLanguages] = useState();

  console.log(languages);
  return (
    <>
      <div className="container">
        <p style={{ color: "#F2A654" }}>
          {" "}
          Showcase your custom details for language
        </p>

        <div>
          {languages.map((language) => {
            return (
              <LanguageForm key={language.id} setLanguages={setLanguages} />
            );
          })}
          <Button>Add</Button>
        </div>
      </div>
    </>
  );
}

export default Languages;
