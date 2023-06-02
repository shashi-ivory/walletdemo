import { colors } from "../../../Utils/color";
import { String } from "../../../Utils/String";

import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { LinearGradient } from "expo-linear-gradient";

import { useDispatch, useSelector } from "react-redux";
import { loginClick, LoginStatus } from "../../../../Redux/Action/AuthaAction";

const LoginScreen = ({ navigation }) => {
  const [phone, setPhone] = useState();
  const [phoneError, setPhoneError] = useState("");
  const [Password, setPassword] = useState();
  const [passwordError, setPasswordError] = useState("");
  const [isLoding, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const dispatch = useDispatch();
  const token = useSelector(
    (state) => state?.user?.loginData?.data?.data[0]?.token
  );
  const validatePhone = () => {
    const phoneRegex = /^[0-9]/;
    if (!phoneRegex.test(phone)) {
      setPhoneError(" Phone Number Required!!");
    } else {
      setPhoneError("");
    }
  };
  const validatedPassword = () => {
    // const passwordRegex =
    //   /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    // if (!passwordRegex.test(Password)) {
    if (Password == "" || Password.length < 6) {
      setPasswordError("Password is Required!!");
    } else {
      setPasswordError("");
    }
  };
  const handlePhoneNumberChange = (text) => {
    setPhone(text);

    setPhoneError("");
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
    setPasswordError("");
  };

  // const onSubmit = () => {
  //   validatePhone();
  //   validatedPassword();
  //   handleNavigation();
  // };

  const onSubmit = () => {
    if (Password == "") {
      setPasswordError("plaese Enter A password !.");
    }
    if (phone == "") {
      setPhoneError("Phone no is required !");
    }

    dispatch(
      loginClick({
        phone: phone,
        password: Password,
      })
    );
  };
  useEffect(() => {
    if (token == undefined || null || "") {
      dispatch(LoginStatus(false));
    } else {
      dispatch(LoginStatus(true));
    }
  }, [token]);
  console.log("Token======>", token);
  const userData = useSelector((state) => console.log("date", state));

  console.log("userData=====>", userData);
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={[
          colors.green,
          colors.peach,
          colors.pink,
          colors.green,
          colors.peach,
        ]}
      >
        <LinearGradient
          style={{
            width: windowWidth,
            backgroundColor: colors.peach,
            // height: "80%",
            height: windowHeight,
            justifyContent: "center",
            alignItems: "center",
            borderBottomEndRadius: 100,
            borderTopLeftRadius: 100,
            borderColor: colors.pink,
          }}
          colors={[
            colors.green,
            colors.peach,
            colors.pink,
            colors.green,
            colors.peach,
          ]}
        >
          <View
            style={{
              top: 30,
              position: "absolute",
              fontWeight: "bold",
              left: windowWidth * 0.85,
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <AntDesign name="closecircleo" size={34} color={colors.peach} />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontWeight: "600",
              fontSize: 25,
              fontVariant: "small-caps",
              color: colors.offWhite,
            }}
          >
            {String.welcome}
          </Text>

          <PhoneInput
            country="IN"
            autoFormat={true}
            value={phone}
            onChangeText={handlePhoneNumberChange}
            containerStyle={{
              marginTop: 10,

              borderWidth: 1,
              width: "80%",
              borderColor: colors.offWhite,
              borderRadius: 5,

              marginBottom: 20,
              backgroundColor: colors.offWhite,
              padding: 0,
            }}
            textContainerStyle={{
              width: "80%",
              backgroundColor: colors.offWhite,
            }}
          />
          {phoneError ? (
            <View
              style={{
                color: colors.white,
                // backgroundColor: colors.offPink,
                borderRadius: 10,
                // borderColor: colors.red,
                // borderWidth: 1,
                width: "80%",
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                top: -8,
              }}
            >
              <Text
                style={{
                  color: colors.red,
                }}
              >
                {phoneError}
              </Text>
            </View>
          ) : null}
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="Password"
            value={Password}
            onChangeText={handlePasswordChange}
          />
          {passwordError ? (
            <View
              style={{
                color: colors.white,
                // backgroundColor: colors.offPink,
                borderRadius: 10,
                // borderColor: colors.red,
                // borderWidth: 1,
                width: "80%",
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                top: -8,
              }}
            >
              <Text
                style={{
                  color: colors.red,
                }}
              >
                {passwordError}
              </Text>
            </View>
          ) : null}
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => onSubmit()}
          >
            <Text style={styles.buttonText}>{String.Login}</Text>
          </TouchableOpacity>
        </LinearGradient>
      </LinearGradient>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    width: windowWidth,
    height: windowHeight,
  },
  input: {
    marginTop: 10,
    height: 55,
    borderWidth: 1,
    width: "80%",
    borderColor: colors.offWhite,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: colors.offWhite,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 5,
    width: "80%",
    height: 55,
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",

    fontVariant: "small-caps",
  },
  errorText: {
    color: colors.white,
    left: 45,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
});

export default LoginScreen;
