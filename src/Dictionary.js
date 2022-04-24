import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import "./Dictionary.css";

function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    const urlAPI = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(urlAPI).then(handleResponse);
  }

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="search-engine mt-4">
      <form id="find-word-form" onSubmit={handleSubmit}>
        <div className="input-group justify-content-center">
          <input
            id="input-bar"
            type="search"
            autoFocus={true}
            onChange={handleKeywordChange}
            placeholder="Feed me a word..."
          />

          <button className="btn search-button" type="submit">
            Search!
          </button>
        </div>
      </form>

      <Result result={result} />
    </div>
  );
}

export default Dictionary;
