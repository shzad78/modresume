// ########## Import Dependencies Here ##########
import { takeEvery, takeLatest, all, fork } from "redux-saga/effects";

// ########## Import Components Here ##########
import * as types from "../constants";

// ########## Import Sagas Here ##########
import loadAppSaga from "./loadAppSaga";

function* watchLoadAppAction() {
  yield takeLatest(types.LOAD_APP, loadAppSaga);
}

export default function* rootSaga() {
  yield all([fork(watchLoadAppAction)]);
}
