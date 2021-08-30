import { combineReducers } from "redux";
import { authReducer } from "./auth";
import add from "./add";

const rootReducer = combineReducers({
  auth: authReducer,
  adds: add,
});

export default rootReducer;
