import initialState from "./contact.initialstate";
import { SEND_MESSAGE, RESET_CONTACT_FORM } from "./contact.actions";

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        sent: true
      };
    case RESET_CONTACT_FORM:
      return {
        ...state,
        sent: false
      };
    default:
      return state;
  }
};

export default contactReducer;
