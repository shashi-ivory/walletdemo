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
  ActivityIndicator,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { loginClick, LoginStatus } from "../../../../Redux/Action/AuthaAction";

const LoginScreen = ({ navigation }) => {
  const [phone, setPhone] = useState();
  const [phoneError, setPhoneError] = useState("");
  const [password, setPassword] = useState();
  const [passwordError, setPasswordError] = useState("");
  const [isLoding, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector(
    (state) => state?.user?.loginData?.data?.data[0]?.token
  );

  console.log("tokennnnn==========>", token);
  const onSubmit = () => {
    if (password == "") {
      setPasswordError("plaese Enter A password !.");
    }
    if (phone == "") {
      setPhoneError("Phone no is required !");
    }
    setIsLoading(true);
    dispatch(
      loginClick({
        phone: phone,
        password: password,
      })
    );
  };
  useEffect(() => {
    if (token == undefined || null || "") {
      dispatch(LoginStatus(true));
    } else {
      dispatch(LoginStatus(false));
    }
  }, [token]);

  const handlePhoneNumberChange = (text) => {
    setPhoneError("");
    setPhone(text);
  };
  const handlePasswordChange = (text) => {
    setPasswordError("");
    setPassword(text);
  };
  const handleRegister = () => {
    navigation.navigate("Registration");
  };
  const forgetPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  return (
    <LinearGradient
      style={{
        flex: 1,
        width: windowWidth,
        backgroundColor: colors.peach,
        // height: "80%",

        // justifyContent: "center",
        alignItems: "center",

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
          backgroundColor: colors.green,
          height: windowHeight * 0.15,
          width: windowWidth * 1,
          borderBottomLeftRadius: 80,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "600",
            fontSize: 25,
            fontVariant: "small-caps",
            color: colors.peach,
          }}
        >
          {String.welcome}
        </Text>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: windowWidth * 1,
          marginTop: windowHeight * 0.15,
        }}
      >
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
              borderRadius: 10,
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
          value={password}
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
          {isLoding ? (
            <ActivityIndicator size="large" color={colors.white} />
          ) : (
            <Text style={styles.buttonText}>{String.Login}</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.registerLink} onPress={() => handleRegister()}>
            {String.createAccount}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotPassword} onPress={() => forgetPassword()}>
            {String.forgetPassword}?
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
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
  registerLink: {
    color: colors.blue,
    // textDecorationLine: "underline",
    marginTop: 10,
    fontSize: 20,
  },
  forgotPassword: {
    color: colors.blue,
    textDecorationLine: "underline",
    marginTop: windowHeight * 0.1,
    fontSize: 20,
  },
  buttonContainer: {
    marginTop: 5,
    width: "80%",
    height: 55,
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
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
