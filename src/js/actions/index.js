// ########## Import Constants Here ##########
import * as types from "../constants";

export function loadApp() {
  return {
    type: types.LOAD_APP
  };
}

export function loadAppAttempt() {
  return {
    type: types.LOAD_APP_ATTEMPT
  };
}

export function loadAppSuccess(data) {
  return {
    type: types.LOAD_APP_SUCCESS,
    payload: data
  };
}

export function loadAppFail(error) {
  return {
    type: types.LOAD_APP_FAIL,
    payload: error
  };
}

export function openModal() {
  return {
    type: types.OPEN_MODAL
  };
}

export function closeModal() {
  return {
    type: types.CLOSE_MODAL
  };
}

export function stickyMenuActive(data) {
  return {
    type: types.STICKY_MENU_ACTIVE,
    payload: data
  };
}

export function stickyMenuDeactive(data) {
  return {
    type: types.STICKY_MENU_DEACTIVE,
    payload: data
  };
}

export function sideMenuOpen() {
  return {
    type: types.SIDE_MENU_OPEN
  };
}

export function sideMenuClose() {
  return {
    type: types.SIDE_MENU_CLOSE
  };
}
