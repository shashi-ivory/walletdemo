import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { colors } from "../../../Utils/color";
import { String } from "../../../Utils/String";

function ForgotPassword({ navigation }) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleEmailChange = (text) => {
    setEmail(text);
    setEmailError("");
  };
  const handleSubmit = () => {
    if (!emailRegex.test(email)) {
      setEmailError("Invalid Email!!");
    } else if (email === "") {
      setEmailError("Please Enter  Email!!");
    } else {
      setLoading(true);
      setTimeout(() => {
        console.log("Password reset initiated for email:", email);
        setLoading(false);
      }, 3000);
      console.log("Password reset initiated for email:", email);
    }
  };

  return (
    <LinearGradient
      style={{
        flex: 1,
        width: windowWidth * 1,
        backgroundColor: colors.peach,
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
      <View style={{ marginTop: windowHeight * 0.06 }}>
        <Image
          style={styles.imageContainer}
          source={require("../../../../assets/forget.png")}
        />
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.title}>{String.forgetPassword}</Text>
        <View></View>
        <Text style={styles.subtitle}>{String.subtitle}</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={handleEmailChange}
        />

        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              right: windowWidth * 0.25,
              fontWeight: "600",
              fontSize: 20,
            }}
          >
            {String.send}
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            {loading ? (
              <ActivityIndicator size="small" color={colors.peach} />
            ) : (
              <AntDesign name="arrowright" size={32} color={colors.peach} />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const imageWidth = windowWidth * 0.56;
const imageHeight = windowHeight * 0.25;
const imageBorderRadius = Math.min(imageWidth, imageHeight) / 2;
export default ForgotPassword;
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  stretch: {
    width: 50,
    height: 200,
    resizeMode: "stretch",
  },
  imageContainer: {
    width: imageWidth,
    height: imageHeight,

    alignSelf: "center",
    borderRadius: imageBorderRadius,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: windowHeight * 0.03,
  },
  subtitle: {
    fontSize: 16,
    marginTop: windowHeight * 0.03,
    marginBottom: windowHeight * 0.02,
  },
  input: {
    width: windowWidth * 0.91,
    height: 40,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    alignSelf: "center",
  },
  errorText: {
    color: colors.red,
    marginBottom: 10,
    right: windowWidth * 0.29,
  },
  button: {
    width: windowWidth * 0.2,
    height: windowHeight * 0.05,
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    left: windowWidth * 0.3,

    borderRadius: 20,
  },
  buttonText: {
    color: colors.white,
    fontWeight: "bold",
  },
});
