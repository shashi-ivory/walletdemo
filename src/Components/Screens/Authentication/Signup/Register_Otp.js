import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
} from "react-native";
import { String } from "../../../Utils/String";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../../Utils/color";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";

function Register_Otp({ navigation }) {
  const et1 = useRef();
  const et2 = useRef();
  const et3 = useRef();
  const et4 = useRef();

  const [f1, setF1] = useState("");
  const [f2, setF2] = useState("");
  const [f3, setF3] = useState("");
  const [f4, setF4] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user?.userDetail);
  console.log("userrrrr", user);
  return (
    <LinearGradient
      colors={[
        colors.green,
        colors.peach,
        colors.pink,

        colors.peach,
        colors.green,
        colors.pink,
      ]}
      style={styles.conatiner}
    >
      <View
        style={{
          height: windowHeight * 0.15,
          backgroundColor: colors.green,
          width: windowWidth * 1,
          justifyContent: "space-around",
          alignItems: "center",
          borderBottomLeftRadius: 90,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
          <AntDesign
            name="leftcircle"
            size={35}
            color={colors.peach}
            style={{ right: 10 }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            color: colors.peach,
            right: 50,
          }}
        >
          {String.otpTitle}
        </Text>
      </View>
      {/* <Text
        style={{
          marginBottom: 20,
          fontSize: 20,

          fontWeight: "600",
        }}
      >
        {String.otpTitle}
      </Text> */}
      <View style={styles.otpView}>
        <TextInput
          keyboardType="number-pad"
          maxLength={1}
          ref={et1}
          value={f1}
          style={[
            styles.inputView,
            // { borderColor: f1.length >= 1 ? colors.blue : colors.black },
          ]}
          onChangeText={(txt) => {
            setF1(txt);
            if (txt.length >= 1) {
              et2.current.focus();
            }
          }}
        />
        <TextInput
          keyboardType="number-pad"
          maxLength={1}
          ref={et2}
          value={f2}
          style={[
            styles.inputView,
            // { borderColor: f2.length >= 1 ? colors.blue : colors.black },
          ]}
          onChangeText={(txt) => {
            setF2(txt);
            if (txt.length >= 1) {
              et3.current.focus();
            } else if (txt.length < 1) {
              et2.current.focus();
            }
          }}
        />
        <TextInput
          keyboardType="number-pad"
          maxLength={1}
          ref={et3}
          value={f3}
          style={[
            styles.inputView,
            // { borderColor: f3.length >= 1 ? colors.blue : colors.black },
          ]}
          onChangeText={(txt) => {
            setF3(txt);
            if (txt.length >= 1) {
              et4.current.focus();
            } else if (txt.length < 1) {
              et2.current.focus();
            }
          }}
        />
        <TextInput
          keyboardType="number-pad"
          maxLength={1}
          ref={et4}
          value={f4}
          style={[
            styles.inputView,
            // { borderColor: f4.length >= 1 ? colors.blue : colors.black },
          ]}
          onChangeText={(txt) => {
            setF4(txt);
            if (txt.length >= 1) {
              et4.current.focus();
            } else if (txt.length < 1) {
              et3.current.focus();
            }
          }}
        />
      </View>
      <TouchableOpacity
        style={{
          width: windowWidth * 0.5,
          marginTop: 10,
          justifyContent: "center",
          alignItems: "center",
          height: windowHeight * 0.05,
        }}
      >
        <Text style={{ fontSize: 20, color: colors.blue, fontWeight: "600" }}>
          {String.Resend}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={{
            backgroundColor: colors.green,
            width: windowWidth * 0.5,
            marginTop: 10,
            justifyContent: "center",
            alignItems: "center",
            height: windowHeight * 0.05,
            borderRadius: 20,
          }}
        >
          <Text style={{ fontSize: 20 }}>{String.sendOtp}</Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
}
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default Register_Otp;
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: colors.peach,
    alignItems: "center",
  },
  otpView: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: windowHeight * 0.2,
  },
  inputView: {
    width: 50,
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    marginLeft: 10,
    alignItems: "center",
    fontSize: 20,
    textAlign: "center",
    borderWidth: 2,
  },
});
