import * as actionType from "../Action/Action";

const initialState = {
  data: null,
  error: null,
  loginData: null,
  isLoading: false,
  isLogin: true,
};
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.USER_LOGIN:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case actionType.USER_LOGIN_SUCCESS:
      return {
        ...state,
        loginData: action?.loginData,
        isLoading: false,
        error: null,
      };
    case actionType.USER_LOGIN_FAIL:
      return {
        ...state,
        error: action?.loginErrorData,
        isLoading: false,
      };
    case actionType.USER_LOGIN_STATUS:
      return {
        ...state,
        login: action?.LoginStutas,
      };
    case actionType.REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case actionType.REGISTER_SUCCESS:
      return {
        ...state,
        registratedData: action?.registratedData,
        isLoading: false,
        error: null,
      };
    case actionType.REGISTER_FAIL:
      return {
        ...state,
        data: action?.regErrorData,
        isLoading: false,
      };
    case actionType.REGISTER_STATUS:
      return {
        ...state,
        register: action?.regStatus,
      };
    default:
      return state;
  }
};
export default AuthReducer;
