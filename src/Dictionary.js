import React, { useState } from "react";
import "./Dictionary.css";

function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`One moment... searching for the definition of "${keyword}"...`);
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
