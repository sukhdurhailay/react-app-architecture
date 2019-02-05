import initialState from "./menu.initialstate";
import { SET_MENU } from "./menu.actions";

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU:
      return {
        ...state,
        selectedItem: action.payload
      };
    default:
      return state;
  }
};

export default menuReducer;
