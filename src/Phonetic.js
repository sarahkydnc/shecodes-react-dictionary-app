import React from "react";

function Phonetic(props) {
  return (
    <div className="search-phonetic">
      <p>{props.phonetic.text}</p>
    </div>
  );
}

export default Phonetic;
