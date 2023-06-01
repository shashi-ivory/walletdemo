import { all } from "redux-saga/effects";
import AuthSaga from "./Sagas/AuthSaga";

function* rootSaga() {
  yield all([AuthSaga()]);
}
export default rootSaga;
