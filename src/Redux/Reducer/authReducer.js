import * as actionType from "../Action/Action";
const initialState = {
  data: null,
  error: null,
  isLoading: false,
  userDetail: null,
  otpVerification: null,
  loginData: null,
  isLogin: false,
  registerData: null,
  isRegister: false,
  logout: null,
};

const authReducer = (state = initialState, action) => {
  console.log("action", action);
  switch (action.type) {
    case actionType.USER_LOGIN:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case actionType.USER_LOGIN_SUCCESS:
      console.log("action", action);
      return {
        ...state,
        loginData: action?.loginData,
        isLoading: false,
        error: null,
      };
    case actionType.USER_LOGIN_FAIL:
      return {
        ...state,
        error: action?.loginErrData,
        isLoading: false,
      };
    case actionType.USER_REGISTATION:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case actionType.USER_REGISTATION_SUCCESS:
      return {
        ...state,

        data: action?.regData,
        isLoading: false,
        error: null,
      };
    case actionType.USER_REGISTATION_FAIL:
      return {
        ...state,

        error: action?.regErrData,
        isLoading: false,
      };

    default:
      return state;
  }
};
export default authReducer;
