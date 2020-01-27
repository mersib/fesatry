import { combineReducers } from "redux";

import userReducers from "./userReducers";
import apiReducers from "./apiReducers";

export default combineReducers({
  user: userReducers,
  api: apiReducers
});
