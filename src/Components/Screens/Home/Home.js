import { Alert, Image } from "react-native";
import { horizontalScale, verticalScale } from "../../../Themes/Metrics";
import React from "react";
import { View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { colors } from "../../Utils/color";
import { LinearGradient } from "expo-linear-gradient";

const Home = ({ navigation }) => {
  const showAlert = () => {
    Alert.alert("Login To Access the details");
  };
  return (
    //MAIN VIEW
    <View style={styles.container}>
      {/* header view  */}
      <LinearGradient
        colors={[
          colors.peach,
          colors.pink,
          colors.peach,

          colors.pink,
          colors.green,
          colors.pink,
          colors.peach,
          colors.pink,

          colors.peach,
        ]}
        start={{ x: 0.3, y: 0.3 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <TouchableOpacity
          style={{
            height: "10%",
            width: windowWidth * 0.6,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("Registration")}
        >
          <Image
            style={{ height: "60%", width: "60%" }}
            source={require("../../../assets/Register.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: "10%",
            width: windowWidth * 0.6,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Image
            style={{ height: "60%", width: "80%" }}
            source={require("../../../assets/joinnow.png")}
          />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    height: verticalScale(70),
    width: horizontalScale(378),
    marginTop: verticalScale(0),
    backgroundColor: colors.green,
  },

  gradient: {
    flex: 1,
    width: windowWidth * 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
