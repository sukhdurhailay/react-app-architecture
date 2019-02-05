import React from "react";

import Form from "../../../components/form";
import Input from "../../../components/form/input";

const ContactFormUI = ({ data, handleChange, handleSubmit }) => {
  return (
    <Form name="contact" handleSubmit={() => handleSubmit()}>
      <Input
        name="message"
        type="text"
        value={data.message}
        handleChange={value => handleChange("message", value)}
      />
    </Form>
  );
};

export default ContactFormUI;
