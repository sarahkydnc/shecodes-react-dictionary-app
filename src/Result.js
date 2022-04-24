import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";

function Result(props) {
  if (props.result) {
    return (
      <div className="search-result mt-4">
        <h2 className="text-capitalize fw-bold">{props.result.word}</h2>

        {props.result.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}

        {props.result.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default Result;
