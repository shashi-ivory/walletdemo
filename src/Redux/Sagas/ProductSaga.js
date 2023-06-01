import { take, takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "../Action/Action";
function* getProducts() {
  console.log("get productn saf");
  let data = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
  data = yield data.json();
  console.log("Action is called ", data);
  yield put({ type: SET_PRODUCT_LIST, data });
}
function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
}
export default productSaga;
