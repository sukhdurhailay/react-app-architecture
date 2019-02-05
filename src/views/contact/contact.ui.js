import React from "react";

import ContactForm from "./contact-form";

const ContactUI = ({ sent, sendMessage, resetContactForm }) => {
  return (
    <div>
      <p>Contact</p>
      {!sent ? (
        <ContactForm sendMessage={sendMessage} />
      ) : (
        <div>
          <p>Sent!</p>
          <button type="button" onClick={() => resetContactForm()}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactUI;
