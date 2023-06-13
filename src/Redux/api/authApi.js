import axios from "axios";

export const base_url = "https://anjanibooks.live/dev/api";

export function* UserLoginApi(loggedData) {
  const login = yield axios
    .post(`${base_url}/login`, loggedData)
    .then(function (response) {
      console.log("response", response);
      return response;
    })
    .catch(function (error) {
      console.log("error", error);

      return error.response;
    });

  return login;
}
export function* UserRegiterApi(registratedData) {
  console.log("registratedData----------------->", registratedData);
  const registers = yield axios
    .post(`${base_url}/register`, registratedData)
    .then(function (response) {
      console.log("response======>", JSON.stringify(response));
      return response;
    })
    .catch(function (error) {
      console.log("error", error);
      return error.response;
    });
  return registers;
}
