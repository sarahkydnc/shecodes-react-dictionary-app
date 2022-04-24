import React from "react";

function Phonetic(props) {
  return (
    <div className="search-phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Give a listen!
      </a>
      <p>{props.phonetic.text}</p>
    </div>
  );
}

export default Phonetic;
