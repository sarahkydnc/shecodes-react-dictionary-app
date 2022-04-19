import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const urlAPI = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(urlAPI).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="search-engine">
      <form id="find-word-form" onSubmit={handleSubmit}>
        <input
          id="input-bar"
          type="search"
          autoFocus={true}
          onChange={handleKeywordChange}
        />
      </form>
    </div>
  );
}

export default Dictionary;
