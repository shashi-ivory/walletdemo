import { useState } from "react";
import { TextInput, StyleSheet, Dimensions } from "react-native";
import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../Utils/color";
import { LinearGradient } from "expo-linear-gradient";
import { String } from "../../Utils/String";

const ThirdParty = ({ navigation }) => {
  const [coinValue, setCoinValue] = useState("");
  const [coinError, setCoinError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setemailError] = useState("");
  const validateCoin = () => {
    const coinRegex = /^[0-9]+$/; // Regex to match digits only

    if (coinValue === "") {
      setCoinError("Please enter a coin value.");
    } else if (!coinRegex.test(coinValue)) {
      setCoinError("Invalid coin value. Only numeric characters are allowed.");
    } else if (parseInt(coinValue) < 10) {
      setCoinError("Coin value must be greater than or equal to 10.");
    } else {
      setCoinError("");
    }
  };
  const ValidateEmail = () => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email === "") {
      setemailError("Email Required!!");
    } else if (!emailRegex.test(email)) {
      setemailError("You have entered an invalid email address!");
    } else {
      setemailError("");
    }
  };

  const handleChangeText = (text) => {
    setCoinValue(text);
    setCoinError("");
  };
  const handelEmailChange = (text) => {
    setemailError("");
    setEmail(text);
  };
  const onSubmit = () => {
    ValidateEmail();
    validateCoin();
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          colors.peach,
          colors.green,
          colors.pink,
          colors.green,
          colors.peach,
          colors.pink,
          colors.green,
          colors.peach,
        ]}
        start={{ x: 0.3, y: 0.3 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <View
          style={{
            backgroundColor: colors.green,
            height: "14%",
            borderBottomLeftRadius: 90,

            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={styles.closeIcon}
            onPress={() => navigation.navigate("Dashboard")}
          >
            <AntDesign
              name="leftcircle"
              size={30}
              color={colors.peach}
              style={{ right: 80 }}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: colors.white,
              fontSize: 20,
              fontWeight: "600",
              alignSelf: "center",
            }}
          >
            {String.deposite}
          </Text>
        </View>
        <View style={{ justifyContent: "center", marginTop: 40 }}>
          <TextInput
            style={styles.input}
            value={email}
            placeholder="Email"
            placeholderTextColor={colors.gray}
            onChangeText={handelEmailChange}
          />
          {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={coinValue}
            placeholder="Enter Amount"
            placeholderTextColor={colors.gray}
            onChangeText={handleChangeText}
          />
          {coinError ? <Text style={styles.error}>{coinError}</Text> : null}

          <TouchableOpacity style={styles.btnContainer} onPress={onSubmit}>
            <Text style={styles.buttonText}>{String.deposite}</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    alignItems: "center",
    alignSelf: "center",
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
    alignSelf: "center",
  },
  error: {
    color: colors.white,
    fontSize: 16,
    // alignSelf: "center",
    left: 40,
  },
  gradient: {
    flex: 1,
    // justifyContent: "center",
  },
  closeIcon: {
    // position: "absolute",
    // top: 30,
    // left: 10,
    alignSelf: "center",
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: colors.green,
    width: "80%",
    marginTop: 5,
    height: 50,
    borderRadius: 10,
  },
});
export default ThirdParty;
