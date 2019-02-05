import React from "react";

const FormUI = ({ name, handleSubmit, children }) => {
  return (
    <form
      name={name}
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      {children}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormUI;
