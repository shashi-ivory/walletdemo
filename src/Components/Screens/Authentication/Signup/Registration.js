import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { colors } from "../../../Utils/color";
import { String } from "../../../Utils/String";

import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";

import {
  RegitrationClick,
  RegistationStatus,
} from "../../../../Redux/Action/AuthaAction";
import { useSelector, useDispatch } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";
const Registration = ({ navigation }) => {
  const [Name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [Email, setEmail] = useState("");
  const [emailError, setEamilError] = useState("");
  const [Phone, setPhone] = useState();
  const [phoneError, setPhoneError] = useState();
  const [Country, setCountry] = useState(101);
  const [countryError, setCountryError] = useState("");
  const [CountryCode, setCountryCode] = useState(91);
  const [countryCodeError, setcountryCodeError] = useState("");
  const [Password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [cPassword, setcPassword] = useState("");
  const [cpasswordError, setcPasswordError] = useState("");
  const dispatch = useDispatch();

  const handelNamechange = (text) => {
    setName(text);
    setNameError("");
  };
  const handelEmailChange = (text) => {
    setEmail(text);
    setEamilError("");
  };
  const handlePhoneChange = (text) => {
    const numericText = text.replace(/[^0-9]/g, "");
    setPhone(numericText);
    setPhoneError("");
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
    setPasswordError("");
  };
  const handlecPasswordChange = (text) => {
    setcPassword(text);
    setcPasswordError("");
  };

  const data = useSelector((state) => console.log("Register Data", state));
  console.log("data", data);

  // const otpVarificationStatus = useSelector((state) =>
  //   console.log("gffDYSDGSGDGSDGG", state?.user?.data?.data?.ok)
  // );
  // console.log("otpVarificationStatus", otpVarificationStatus);
  const onSubmit = (values) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d+$/;

    if (Name === "") {
      setNameError("Name is Required!!");
    } else if (Name.length < 7) {
      setNameError("Name should be at least 7 characters long!!");
    } else if (!nameRegex.test(Name)) {
      setNameError("Invalid Name Format!!");
    }

    if (Email === "") {
      setEamilError("Email is Required!!");
    } else if (!emailRegex.test(Email)) {
      setEamilError("Invalid Email Format!!");
    }

    if (Phone === "") {
      setPhoneError("Phone is Required !!");
    } else if (Phone < 10) {
      setPhoneError("Should be at least 10 Digits long!!");
    } else if (!phoneRegex.test(Phone)) {
      setPhoneError("Invalid Phone Number!!");
    }

    if (Password === "") {
      setPasswordError("Password is Required!!");
    }
    if (Country === "") {
      setCountryError("Country is Required!!");
    }
    if (CountryCode === "") {
      setcountryCodeError("Country Code is Required!!");
    }
    if (Password !== cPassword) {
      setcPasswordError("Passwords Do Not Match!!");
    } else {
      const payload = {
        name: Name,
        email: Email,
        country_code: CountryCode,
        phone: Phone,
        password: Password,
        country: Country,
      };
      if (payload) {
        dispatch(RegitrationClick(payload));
      }
    }
  };

  const cancelRegistration = () => {
    setNameError("");
    setEamilError("");
    setPhoneError("");
    setPasswordError("");
    navigation.navigate("Register_Otp");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <LinearGradient
        style={{
          flex: 1,
          width: "100%",
          backgroundColor: colors.peach,

          borderColor: colors.pink,
        }}
        colors={[
          colors.green,
          colors.peach,
          colors.pink,
          colors.green,
          colors.peach,
          colors.pink,
        ]}
      >
        <View
          style={{
            backgroundColor: colors.green,
            height: "15%",
            borderBottomLeftRadius: 60,
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <AntDesign
            name="leftcircle"
            size={windowWidth * 0.09}
            color={colors.peach}
            style={{ right: windowWidth * 0.2, alignSelf: "center" }}
            onPress={() => navigation.navigate("Home")}
          />

          <Text
            style={{
              fontWeight: "600",

              fontSize: 25,
              fontVariant: "small-caps",
              color: colors.white,
              alignSelf: "center",
              justifyContent: "center",
            }}
          >
            {String.Registation}
          </Text>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <TextInput
            style={styles.input}
            placeholder={String.Name}
            value={Name}
            onChangeText={handelNamechange}
          />
          {nameError ? (
            <Text style={styles.errorStyle}>{nameError}</Text>
          ) : null}

          <TextInput
            style={styles.input}
            placeholder={String.Email}
            value={Email}
            onChangeText={handelEmailChange}
          />
          {emailError ? (
            <Text style={styles.errorStyle}>{emailError}</Text>
          ) : null}
          <TextInput
            style={styles.input}
            placeholder={String.Phone}
            value={Phone}
            onChangeText={handlePhoneChange}
          />

          {phoneError ? (
            <Text style={styles.errorStyle}>{phoneError}</Text>
          ) : null}
          {/* <TextInput
            style={styles.input}
            placeholder={String.Country}
            value={Country}
            onChangeText={handleCountryChange}
          />
          {countryError ? (
            <Text style={styles.errorStyle}>{countryError}</Text>
          ) : null}
          <TextInput
            style={styles.input}
            placeholder={String.CountryCode}
            value={CountryCode}
            onChangeText={handleCountryCodeChange}
          />
          {countryCodeError ? (
            <Text style={styles.errorStyle}>{countryCodeError}</Text>
          ) : null} */}
          <TextInput
            style={styles.input}
            placeholder={String.Password}
            secureTextEntry
            value={Password}
            onChangeText={handlePasswordChange}
          />
          {passwordError ? (
            <Text style={styles.errorStyle}>{passwordError}</Text>
          ) : null}

          <TextInput
            style={styles.input}
            placeholder={String.cpassword}
            secureTextEntry
            value={cPassword}
            onChangeText={handlecPasswordChange}
          />
          {cpasswordError ? (
            <Text style={styles.errorStyle}>{cpasswordError}</Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => onSubmit()}
          >
            <Text style={styles.buttonText}>{String.Registation}</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => cancelRegistration()}
          >
            <Text style={styles.buttonText}>{String.cancel}</Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => cancelRegistration()}
          >
            <Text style={styles.buttonText}>{String.Verify_OTP}</Text>
          </TouchableOpacity>
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.peach,
  },
  input: {
    marginTop: windowHeight * 0.02,
    height: windowHeight * 0.07,
    borderWidth: 1,
    width: windowWidth * 0.8,
    borderColor: colors.offWhite,
    borderRadius: 5,
    paddingHorizontal: windowWidth * 0.02,
    backgroundColor: colors.offWhite,
    marginBottom: windowHeight * 0.03,
    alignSelf: "center",
  },
  buttonContainer: {
    marginTop: windowHeight * 0.01,
    width: windowWidth * 0.8,
    height: windowHeight * 0.07,
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,

    alignSelf: "center",
  },
  buttonText: {
    color: colors.white,
    fontSize: windowHeight * 0.02,
    fontWeight: "bold",
  },
  errorStyle: {
    color: colors.white,
    left: windowWidth * 0.1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: windowHeight * 0.007,
  },
  scrollContainer: {
    flexGrow: 1,
  },
});

export default Registration;
