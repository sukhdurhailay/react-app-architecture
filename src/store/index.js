import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import menuReducer from "./menu/menu.reducer";
import contactReducer from "./contact/contact.reducer";

const store = createStore(
  combineReducers({ menu: menuReducer, contact: contactReducer }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
