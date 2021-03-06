import React from "react";

function Footer() {
  return (
    <div className="App-footer text-center">
      <small className="coded-by mt-5">
        This app was created by {""}
        <a
          href="https://www.sarahkaydence.com"
          target="_blank"
          rel="noreferrer"
          className="clickthru-links"
        >
          Sarah Kaydence ©
        </a>
        ,<br />
        as one of her{" "}
        <a
          href="https://www.shecodes.io/react"
          target="_blank"
          rel="noreferrer"
          className="clickthru-links"
        >
          SheCodes React
        </a>{" "}
        final projects
        <br />
        Open-sourced on {""}
        <a
          href="https://github.com/sarahkydnc/shecodes-react-dictionary-app"
          target="_blank"
          rel="noreferrer"
          className="clickthru-links"
        >
          GitHub
        </a>{" "}
        {""}| Hosted on {""}
        <a
          href="https://www.netlify.com"
          target="_blank"
          rel="noreferrer"
          className="clickthru-links"
        >
          Netlify
        </a>{" "}
        {""}| Photos from{" "}
        <a
          href="https://unsplash.com/"
          target="_blank"
          rel="noreferrer"
          className="clickthru-links"
        >
          Unsplash
        </a>
      </small>
    </div>
  );
}

export default Footer;
