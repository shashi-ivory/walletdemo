import * as actionType from "./Action";
export const loginClick = (payload) => {
  console.log("payload============>", payload);
  return {
    type: actionType.USER_LOGIN,
    loggedData: payload,
  };
};
export const LoginStatus = (loginStatus) => {
  console.log("loginStatus", loginStatus);
  return {
    type: actionType.USER_LOGIN_STATUS,
    loginStatus,
  };
};

export const RegistationClick = (payload) => {
  console.log("Registration payload=========>", payload);
  return {
    type: actionType.USER_REGISTATION,
    registationData: payload,
  };
};
export const RegistationStatus = (RegisterStatus) => {
  console.log("Registration status=========>", RegisterStatus);
  return {
    type: actionType.USER_REGISTATION_STATUS,
    RegisterStatus,
  };
};

export const otpRequest = (email) => {
  console.log("otp request ========>", email);
  return {
    type: actionType.OTP_REQUEST,
    email,
  };
};
export const otpSucess = () => {
  return {
    type: actionType.OTP_SUCESS,
  };
};
export const otpFail = (error) => {
  return {
    type: actionType.OTP_FAIL,
    error,
  };
};
