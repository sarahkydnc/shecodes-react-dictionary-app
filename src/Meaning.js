import React from "react";
import Synonyms from "./Synonyms";

function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="search-meaning mt-4">
      <h4 className="fw-bold fst-italic">{props.meaning.partOfSpeech}</h4>

      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>Definition: {definition.definition}</p>
            <p className="fw-light fst-italic fs-6">
              Example: "{definition.example}"
            </p>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}

export default Meaning;
