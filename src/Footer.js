import React from "react";

function Footer() {
  return (
    <div>
      <p className="coded-by text-middle mt-5">
        This app was created by {""}
        <a
          href="https://www.sarahkaydence.com"
          target="_blank"
          rel="noreferrer"
          className="clickthru-links"
        >
          Sarah Kaydence ©
        </a>
        , as one of her{" "}
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
        {""}| Photo by{" "}
        <a
          href="https://unsplash.com/@ninjason?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          target="_blank"
          rel="noreferrer"
          className="clickthru-links"
        >
          Jason Leung
        </a>{" "}
        on{" "}
        <a
          href="https://unsplash.com/s/photos/vintage-tv?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          target="_blank"
          rel="noreferrer"
          className="clickthru-links"
        >
          Unsplash
        </a>
      </p>
    </div>
  );
}

export default Footer;
