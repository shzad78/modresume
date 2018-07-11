// ########## Import Constants Here ##########
import * as types from "../constants";

const initial = {
  sideMenu: false
};

export default function(state = initial, action) {
  switch (action.type) {
    case types.SIDE_MENU_OPEN:
      return { ...state, sideMenu: true };
    case types.SIDE_MENU_CLOSE:
      return { ...state, sideMenu: false };
    default:
      return state;
  }
}
