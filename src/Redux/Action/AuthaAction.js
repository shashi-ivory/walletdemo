import * as actionType from "./Action";

export const loginClick = (payload) => {
  console.log("payload authaction ", payload);
  return {
    type: actionType.USER_LOGIN,
    loggedData: payload,
  };
};

export const LoginStatus = (loginStatus) => {
  return {
    type: actionType.USER_LOGIN_STATUS,
    loginStatus,
  };
};
export const RegitrationClick = (payload) => {
  console.log("payload regitrationClick =====>", payload);
  return {
    type: actionType.REGISTER_REQUEST,
    registratedData: payload,
  };
};
export const RegitrationSuccess = (registrationSucess) => {
  return {
    type: actionType.REGISTER_SUCCESS,
    registrationSucess,
  };
};
export const RegistrationStatus = (registerStatus) => {
  return {
    type: actionType.REGISTER_STATUS,
    registerStatus,
  };
};
