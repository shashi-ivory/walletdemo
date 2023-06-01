import { colors } from "../../Utils/color";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { String } from "../../Utils/String";
const { width, height } = Dimensions.get("window");
const Withdraw = ({ navigation }) => {
  const [coinValue, setcoinValue] = useState("");
  const [coinError, setCoinError] = useState("");
  const handleWithdrawCoin = () => {
    const coinRegex = /^[0-9]+$/;
    if (coinValue === "") {
      setCoinError("Please Enter Coin value");
    } else if (!coinRegex.test(coinValue)) {
      setCoinError("Invalid coin value. Only numeric characters are allowed.");
    } else if (parseInt(coinValue) < 10) {
      setCoinError("Coin value must be greater than or equal to 10.");
    } else {
      setCoinError("");
    }
  };
  const handleChangeText = (text) => {
    setcoinValue(text);
    setCoinError("");
  };
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          colors.green,
          colors.peach,
          colors.pink,

          colors.green,
          colors.peach,
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <View
          style={{
            height: "15%",
            backgroundColor: colors.green,
            borderBottomLeftRadius: 80,
          }}
        >
          <View
            style={{
              top: 50,
              justifyContent: "space-around",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Dashboard")}
              style={styles.closeIcon}
            >
              <AntDesign name="leftcircle" size={34} color={colors.peach} />
            </TouchableOpacity>

            <Text style={styles.top}>{String.withdraw}</Text>
          </View>
        </View>
        <View>
          <TextInput
            placeholder="Withdraw"
            style={styles.text}
            onChangeText={handleChangeText}
          />
          {coinError ? (
            <Text style={styles.errorStyle}>{coinError}</Text>
          ) : null}
          <TouchableOpacity style={styles.button} onPress={handleWithdrawCoin}>
            <Text style={styles.buttonText}>{String.withdrawCoins}</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Withdraw;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  closeIcon: {
    position: "absolute",
    justifyContent: "center",
    // alignSelf: "center",
    // top: 30,
    left: 25,
  },
  text: {
    marginTop: height * 0.2,
    height: 55,
    borderWidth: 1,
    width: "80%",
    borderColor: colors.offWhite,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: colors.offWhite,
    marginBottom: 20,
    alignSelf: "center",
    justifyContent: "center",
    fontVariant: "small-caps",
    alignItems: "center",
  },
  button: {
    marginTop: 5,
    width: "80%",
    height: 55,
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,

    alignSelf: "center",
  },
  buttonText: {
    fontSize: width * 0.04,
    fontWeight: "bold",
    color: colors.white,
  },
  errorStyle: {
    color: colors.white,
    left: 40,
    marginBottom: 5,
  },
  top: {
    color: colors.white,
    fontWeight: "600",
    fontSize: 20,
    left: 10,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    fontVariant: "small-caps",
  },
});
