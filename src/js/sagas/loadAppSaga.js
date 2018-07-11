// ########## Import Dependencies Here ##########
import { put, call } from "redux-saga/effects";

// ########## Import Components Here ##########
import * as actions from "../actions";
import * as api from "../api";

function* loadAppSaga() {
  yield put(actions.loadAppAttempt());
  try {
    const response = yield call(api.loadApp);
    yield put(actions.loadAppSuccess(response));
  } catch (err) {
    yield put(actions.loadAppFail(err));
  }
}

export default loadAppSaga;
