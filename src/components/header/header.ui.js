import React from "react";

import "./header.css";

import Menu from "./menu";

const HeaderUI = () => (
  <header className="header">
    <Menu
      menuItems={[
        {
          url: "/",
          text: "Home"
        },
        {
          url: "/contact",
          text: "Contact"
        }
      ]}
    />
  </header>
);

export default HeaderUI;
