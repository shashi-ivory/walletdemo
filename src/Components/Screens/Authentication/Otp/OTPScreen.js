import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../../../Utils/color";
import { LinearGradient } from "expo-linear-gradient";
const OTPScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.peach }}>
      <LinearGradient
        colors={[
          colors.green,
          colors.peach,
          colors.pink,
          colors.green,
          colors.peach,
        ]}
        style={styles.container}
      >
        <View style={styles.iconContainer}>
          <Icon
            name="lock"
            size={Dimensions.get("window").width * 0.4}
            color={colors.offWhite}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Enter OTP:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={6}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Verify</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = {
  container: {
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.peach,
    borderRadius: 20,
  },
  iconContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  inputContainer: {
    width: Dimensions.get("window").width * 0.8,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: colors.offWhite,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: colors.green,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
};

export default OTPScreen;
