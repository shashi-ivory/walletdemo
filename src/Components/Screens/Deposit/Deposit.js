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
import PaymentMethod from "./PaymentMethod/PaymentMethod";
const { width, height } = Dimensions.get("window");

const Deposit = ({ navigation }) => {
  const [coin, setcoin] = useState("");
  const [coinError, setcoinError] = useState("");
  const handleDepositCoin = () => {
    const coinRegex = /(0|[1-9][0-9]*)/;
    if (coin === "") {
      setcoinError("Enter coins value");
    } else if (!coinRegex.test(coin)) {
      setcoinError(`Invalid coin value. Only numeric char are allowed.`);
    } else if (parseInt(coin) < 10) {
      setcoinError("Coin value must be greater than or equal to 10.");
    } else {
      setcoinError("");
      setcoin("");
      navigation.navigate("PaymentMethod");
    }
  };
  const handleCoinChange = (text) => {
    setcoin(text);
    setcoinError("");
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
            height: "14%",
            backgroundColor: colors.green,
            flexDirection: "row",
            borderBottomLeftRadius: 90,
          }}
        >
          <View
            style={{
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: "row",

              width: width,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Dashboard")}
              style={{
                alignSelf: "center",
                right: 50,
              }}
            >
              <AntDesign name="leftcircle" size={34} color={colors.peach} />
            </TouchableOpacity>

            <Text
              style={{
                color: colors.white,
                justifyContent: "center",
                alignSelf: "center",
                right: 50,
                fontSize: 20,
                fontWeight: "600",
              }}
            >
              {String.deposite}
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <TextInput
            placeholder="Coin Deposits"
            style={styles.text}
            value={coin}
            onChangeText={handleCoinChange}
          />
          {coinError ? <Text style={styles.coinError}>{coinError}</Text> : null}
          <TouchableOpacity style={styles.button} onPress={handleDepositCoin}>
            <Text style={styles.buttonText}>{String.Depositcoin}</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Deposit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  closeIcon: {
    // left: windowWidth * 0.85,
    // position: "absolute",
    // top: 30,
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
  top: {
    color: colors.white,
    fontWeight: "600",
    fontSize: 20,
    left: 10,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
  coinError: {
    color: colors.white,
    left: 40,
    marginBottom: 5,
  },
});
