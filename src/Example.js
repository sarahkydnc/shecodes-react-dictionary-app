import React from "react";

function Example(props) {
  if (props.example) {
    return (
      <div className="search-example">
        <p className="fs-6">
          Example: <span className="fw-light fst-italic ">{props.example}</span>
        </p>
      </div>
    );
  } else {
    return null;
  }
}

export default Example;
