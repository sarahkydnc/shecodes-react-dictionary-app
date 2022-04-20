import React from "react";

function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="search-meaning mt-4">
      <h4 className="fw-bold fst-italic">{props.meaning.partOfSpeech}</h4>

      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            <p className="fw-light fst-italic fs-6">{definition.example}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Meaning;
