import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import "./Dictionary.css";

function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    // Documentation (DictionaryAPI): https://dictionaryapi.dev
    const urlAPI = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(urlAPI).then(handleDictionaryResponse);

    // Documentation (Pexels): https://www.pexels.com/api/documentation/?
    let pexelsKeyAPI = `563492ad6f917000010000015a599c35c56143dd80c319ae16d49130`;
    let pexelsHeadersAPI = { "Authorisation": `Bearer ${pexelsKeyAPI}` };
    const pexelsUrlAPI = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
    axios
      .get(pexelsUrlAPI, { headers: pexelsHeadersAPI })
      .then(handlePexelsResponse);
  }

  // API response from Dictionary API
  function handleDictionaryResponse(response) {
    setResult(response.data[0]);
  }

  // API response from Pexels API
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
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

      <Result result={result} photos={photos} />
    </div>
  );
}

export default Dictionary;
