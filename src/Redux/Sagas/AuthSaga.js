import { UserLoginApi, UserRegistrationApi } from "../api/authApi";
import { call, all, takeEvery, put, join } from "redux-saga/effects";
import * as actionType from "../Action/Action";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function* userLogin(payload) {
  const { loggedData } = payload;

  const loginData = yield call(UserLoginApi, loggedData);
  if (loginData?.data.login === true) {
    AsyncStorage.setItem(
      "UserToken",
      JSON.stringify(loginData?.data?.data[0]?.token)
    );
    AsyncStorage.setItem(
      "UserId",
      JSON.stringify(loginData?.data?.data[0]?.user_id)
    );
    console.warn(loggedData, "lofgggggggggdattatata");
    yield put({
      type: actionType.USER_LOGIN_SUCCESS,
      loginData,
    });
    Alert.alert(loginData.data.message, "Login Sucessfull");
  } else {
    Alert.alert(loginData.data.message);
    yield put({
      type: actionType.USER_LOGIN_FAIL,
      loginErrData: loginData,
    });
    Alert.alert(loginData.data.message, "Login Failed");
  }
}

function* userRegistration(payload) {
  const { registratedData } = payload;
  console.log("regData????????????", registratedData);
  const regData = yield call(UserRegistrationApi, registratedData);

  if (regData?.data?.ok === true) {
    yield put({
      type: actionType.USER_REGISTATION_SUCCESS,
      regData,
    });
    Alert.alert(JSON.stringify(regData?.data?.message));
  } else {
    yield put({
      type: actionType.USER_REGISTATION_FAIL,
      regErrData: regData,
    });
    Alert.alert(JSON.stringify(regData.data.message));
  }
}

function* AuthSaga() {
  yield all([takeEvery(actionType.USER_REGISTATION, userRegistration)]);
  yield all([takeEvery(actionType.USER_LOGIN, userLogin)]);
}
export default AuthSaga;
