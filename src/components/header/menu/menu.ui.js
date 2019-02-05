import React from "react";

import "./menu.css";

import MenuItem from "./menu-item";

const MenuUI = ({ menuItems, handleMenuItemClick, selectedItem }) => (
  <div className="menu">
    <ul className="list">
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          url={item.url}
          text={item.text}
          handleMenuItemClick={handleMenuItemClick}
          selected={selectedItem === item.url}
        />
      ))}
    </ul>
  </div>
);

export default MenuUI;
