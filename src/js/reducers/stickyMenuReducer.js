// ########## Import Constants Here ##########
import * as types from "../constants";

const initial = {
  stickyMenu: false,
  scrollY: null
};

export default function(state = initial, action) {
  switch (action.type) {
    case types.STICKY_MENU_ACTIVE:
      return { ...state, stickyMenu: true, scrollY: action.payload };
    case types.STICKY_MENU_DEACTIVE:
      return { ...state, stickyMenu: false, scrollY: action.payload };
    default:
      return state;
  }
}
