// ########## Import Dependencies Here ##########
import { combineReducers } from "redux";

// ########## Import Reducers Here ##########
import loadAppReducer from "./loadAppReducer";
import showModalReducer from "./showModalReducer";
import stickyMenuReducer from "./stickyMenuReducer";
import sideMenuReducer from "./sideMenuReducer";

const rootReducer = combineReducers({
  loadAppReducer,
  showModalReducer,
  stickyMenuReducer,
  sideMenuReducer
});

export default rootReducer;
