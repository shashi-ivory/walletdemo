import { colors } from "../../../Utils/color";
import { String } from "../../../Utils/String";

import React, { useState } from "react";
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
const LoginScreen = ({ navigation }) => {
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [Password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
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
  const onSubmit = () => {
    validatePhone();
    validatedPassword();
  };
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
              left: 370,
              top: 70,
              position: "absolute",
              fontWeight: "bold",
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
              color: colors.white,
            }}
          >
            {String.welcome}
          </Text>
          <View
            style={{
              backgroundColor: colors.peach,
              width: "90%",
              height: 250,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              borderRadius: 20,
            }}
          >
            <PhoneInput
              country="IN"
              autoFormat={true}
              value={phone}
              onChangeText={handlePhoneNumberChange}
              containerStyle={{ width: "79%", borderRadius: 4 }}
              textContainerStyle={{ width: "79%", borderRadius: 4 }}
            />
            {phoneError ? (
              <Text
                style={{
                  color: colors.white,

                  alignSelf: "center",
                }}
              >
                {phoneError}
              </Text>
            ) : null}
            <TextInput
              style={styles.input}
              secureTextEntry
              placeholder="Password"
              value={Password}
              onChangeText={handlePasswordChange}
            />
            {passwordError ? (
              <Text
                style={{
                  color: colors.white,

                  alignSelf: "center",
                }}
              >
                {passwordError}
              </Text>
            ) : null}
            <TouchableOpacity style={styles.buttonContainer} onPress={onSubmit}>
              <Text style={styles.buttonText}>{String.Login}</Text>
            </TouchableOpacity>
          </View>
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
    width: "80%",
    height: 60,
    borderWidth: 1,
    borderColor: colors.green,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: colors.white,
    borderBottomColor: colors.peach,
    borderColor: colors.peach,
    borderWidth: 3,
  },
  buttonContainer: {
    width: "80%",
    height: 40,
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  errorText: {
    color: colors.white,
  },
});

export default LoginScreen;
