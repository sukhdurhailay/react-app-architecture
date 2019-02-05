import React from "react";

import "./link.css";

const LinkUI = ({ text, url }) => (
  <a className="link" href={url}>
    {text}
  </a>
);

export default LinkUI;
