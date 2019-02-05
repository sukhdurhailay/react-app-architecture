import React from "react";

const InputUI = ({ name, value, handleChange, type }) => {
  return (
    <input
      name={name}
      value={value}
      onChange={e => {
        handleChange(e.target.value);
      }}
      tyoe={type}
    />
  );
};

export default InputUI;
