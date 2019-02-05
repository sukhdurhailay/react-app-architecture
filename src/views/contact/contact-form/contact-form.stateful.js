import React, { PureComponent } from "react";

import ContactFormUI from "./contact-form.ui";

export class ContactFormStateful extends PureComponent {
  state = {
    message: ""
  };

  handleChange = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmit = () => {
    this.props.sendMessage(this.state);
  };

  render() {
    return (
      <ContactFormUI
        data={this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default ContactFormStateful;
