import React from "react";

function Example(props) {
  if (props.example) {
    return (
      <div className="search-example">
        <p>Example:</p>
        <p className="fw-light fst-italic fs-6">{props.example}</p>
      </div>
    );
  } else {
    return null;
  }
}

export default Example;
