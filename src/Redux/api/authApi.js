import axios from "axios";

export const base_url = "https://paindustry.in/booky/api";

export function* UserRegistrationApi(registratedData) {
  const registration = yield axios
    .post(`https://anjanibooks.live/dev/api/register`, registratedData)
    .then(function (response) {
      alert(JSON.stringify(response));
      console.log("res", response);
      return response;
    })
    .catch(function (error) {
      console.log("error", error);
      alert(error);
      return error.response;
    });

  return registration;
}
export function* UserLoginApi(loggedData) {
  const login = yield axios
    .post(`https://anjanibooks.live/dev/api/login`, loggedData)
    .then(function (response) {
      console.log("response Login =========>", response);

      return response;
      Alert.alert("respose", response.JSON.stringify());
    })
    .catch(function (error) {
      console.log("error", error);

      return error.response;
    });

  return login;
}
