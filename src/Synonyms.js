import React from "react";

function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="text-start">
        <p>Synonyms:</p>
        <ul className="search-synonym">
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}

export default Synonyms;
