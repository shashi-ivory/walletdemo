import { SafeAreaView } from "react-native";
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

const Registration = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: windowWidth,
          backgroundColor: colors.green,
          height: "80%",
          justifyContent: "center",
          alignItems: "center",
          borderBottomEndRadius: 100,
          borderTopLeftRadius: 100,
        }}
      >
        <View
          style={{
            left: 380,
            top: 30,
            position: "absolute",
            fontWeight: "bold",
          }}
        >
          <TouchableOpacity>
            <AntDesign name="closecircleo" size={24} color={colors.peach} />
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
          Registration!!
        </Text>
        <View
          style={{
            backgroundColor: colors.peach,
            width: "80%",
            height: 400,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            borderRadius: 20,
          }}
        >
          <TextInput style={styles.input} placeholder={String.Name} />

          <TextInput style={styles.input} placeholder={String.Email} />
          <TextInput style={styles.input} placeholder={String.Phone} />

          <TextInput
            style={styles.input}
            placeholder={String.Password}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder={String.cpassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Registration</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    backgroundColor: colors.pink,
  },
  input: {
    width: "80%",
    height: 40,
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
});

export default Registration;
