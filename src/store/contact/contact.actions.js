export const SEND_MESSAGE = "SEND_MESSAGE";
export const sendMessage = data => ({
  type: SEND_MESSAGE,
  payload: data
});

export const RESET_CONTACT_FORM = "RESET_CONTACT_FORM";
export const resetContactForm = () => ({
  type: RESET_CONTACT_FORM
});
