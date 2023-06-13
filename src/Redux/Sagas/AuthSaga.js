import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserLoginApi, UserRegiterApi } from "../api/authApi";
import { call, all, takeEvery, put } from "redux-saga/effects";
import * as actionType from "../Action/Action";
import { Alert } from "react-native";

function* userLogin(payload) {
  const { loggedData } = payload;

  const loginData = yield call(UserLoginApi, loggedData);
  console.log("logggefefe", loggedData);
  if (loginData?.data.login === true) {
    AsyncStorage.setItem(
      "UserToken",
      JSON.stringify(loginData?.data?.data[0]?.token)
    );
    AsyncStorage.setItem(
      "UserId",
      JSON.stringify(loginData?.data?.data[0]?.user_id)
    );

    yield put({
      type: actionType.USER_LOGIN_SUCCESS,
      loginData,
    });
  } else {
    Alert.alert(loginData.data.message);
    yield put({
      type: actionType.USER_LOGIN_FAIL,
      loginErrorData: loginData,
    });
  }
}

function* userRegistration(payload) {
  const { registratedData } = payload;
  console.log("resshjadsagd", registratedData);
  const regData = yield call(UserRegiterApi, registratedData);
  console.log("reg datatattatat", regData);
  if (regData?.data?.ok == true) {
    yield put({
      type: actionType.REGISTER_SUCCESS,
      regData,
    });
    Alert.alert(JSON.stringify(registratedData.data.message));
  } else {
    yield put({
      type: actionType.REGISTER_FAIL,
    });
    Alert.alert(JSON.stringify(registratedData?.data?.message));
  }
}

function* AuthSaga() {
  yield all([takeEvery(actionType.USER_LOGIN, userLogin)]);
  yield all([takeEvery(actionType.REGISTER_SUCCESS, userRegistration)]);
}
export default AuthSaga;
