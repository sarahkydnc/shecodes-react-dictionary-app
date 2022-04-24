import React from "react";

function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="search-synonym">
        {props.synonyms.map(function (synonym, index) {
          <p>Synonyms:</p>;
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}

export default Synonyms;
