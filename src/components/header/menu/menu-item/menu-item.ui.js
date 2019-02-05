import React from "react";

import "./menu-item.css";

const MenuItemUI = ({ url, text, handleMenuItemClick, selected }) => {
  return (
    <li className={`menu-item ${selected ? "menu-item__selected" : ""}`}>
      <div onClick={() => handleMenuItemClick(url)}>{text}</div>
    </li>
  );
};

export default MenuItemUI;
