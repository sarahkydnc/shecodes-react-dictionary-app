import React from "react";

function Example(props) {
  if (props.example) {
    return (
      <div className="search-example">
        <p className="fw-light fst-italic fs-6">Example: "{props.example}"</p>
      </div>
    );
  } else {
    return null;
  }
}

export default Example;
