import { connect } from "react-redux";

import {
  sendMessage,
  resetContactForm
} from "../../store/contact/contact.actions";
import Contact from "./contact.ui";

export default connect(
  state => ({
    sent: state.contact.sent
  }),
  {
    sendMessage,
    resetContactForm
  }
)(Contact);
