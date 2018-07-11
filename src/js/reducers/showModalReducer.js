// ########## Import Constants Here ##########
import * as types from "../constants";

const initial = {
  isModalOpen: false
};

export default function(state = initial, action) {
  switch (action.type) {
    case types.OPEN_MODAL:
      return { ...state, isModalOpen: true };
    case types.CLOSE_MODAL:
      return { ...state, isModalOpen: false };
    default:
      return state;
  }
}
