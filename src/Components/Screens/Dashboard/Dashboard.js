import { Image } from "react-native";
import { horizontalScale, verticalScale } from "../../../Themes/Metrics";
import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  Linking,
} from "react-native";
import { colors } from "../../Utils/color";
import { String } from "../../Utils/String";
import { FontAwesome } from "@expo/vector-icons";
import { SliderBox } from "react-native-image-slider-box";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
const image = [
  "https://source.unsplash.com/1024x768/?nature",
  "https://source.unsplash.com/1024x768/?water",
  "https://source.unsplash.com/1024x768/?girl",
  "https://source.unsplash.com/1024x768/?tree", // Network image
];
const Dashboard = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    //Dashboard VIEW
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
      // style={styles.gradient}
      style={styles.container}
    >
      {/* header view  */}
      <View
        style={{
          height: "15%",
          width: windowWidth,
          backgroundColor: colors.green,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          borderBottomLeftRadius: 80,
        }}
      >
        <View>
          <AntDesign name="logout" size={32} color={colors.peach} />
        </View>
        <Text
          style={{
            color: colors.peach,
            fontWeight: "bold",
            fontSize: 20,
            right: 60,
          }}
        >
          {String.Dashboard}
        </Text>
      </View>
      {/* newlogo */}
      <View style={styles.newLogo}>
        <TouchableOpacity>
          <Image
            style={{ height: 80, width: 140, left: 20 }}
            source={require("../../../../assets/splash.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.secondContainer}>
        <View
          style={{
            width: "25%",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.withdrawStyle}>
            <TouchableOpacity
              style={{
                height: "90%",
                width: "90%",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => navigation.navigate("Withdraw")}
            >
              <Image
                style={{ height: "90%", width: "90%" }}
                source={require("../../../assets/withdraw.png")}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 5,
            }}
          >
            <Text style={{ color: colors.white, alignSelf: "center" }}>
              {String.withdraw}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "25%",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.depositeStyle}>
            <TouchableOpacity
              style={{
                height: "90%",
                width: "90%",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => navigation.navigate("Deposit")}
            >
              <Image
                style={{ height: "90%", width: "80%" }}
                source={require("../../../assets/deposit.png")}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 5,
            }}
          >
            <Text style={{ color: colors.white, alignSelf: "center" }}>
              {String.deposite}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "25%",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.ThirdPartystyle}>
            <TouchableOpacity
              style={{
                height: "90%",
                width: "90%",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => navigation.navigate("ThirdParty")}
            >
              <Image
                style={{ height: "90%", width: "85%" }}
                source={require("../../../assets/third-party.png")}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 5,
            }}
          >
            <Text
              style={{
                color: colors.white,

                alignSelf: "center",
              }}
            >
              {String.ThirdParty}
            </Text>
          </View>
        </View>
      </View>
      {/* image Slider */}
      <View
        style={{
          backgroundColor: colors.green,
          top: 10,
          height: 230,
          width: "90%",
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SliderBox
          // ImageComponent={FastImage}
          images={image}
          sliderBoxHeight={200}
          onCurrentImagePressed={(index) =>
            console.warn(`image ${index} pressed`)
          }
          dotColor={colors.pink}
          inactiveDotColor={colors.inactive}
          paginationBoxVerticalPadding={20}
          autoplay
          circleLoop
          resizeMethod={"resize"}
          resizeMode={"cover"}
          paginationBoxStyle={{
            position: "absolute",
            bottom: 0,
            padding: 0,
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
          }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,

            backgroundColor: "#808080",
          }}
          ImageComponentStyle={{
            borderRadius: 15,
            width: "80%",
            marginTop: 15,
          }}
          imageLoadingColor="#2196F3"
        />
      </View>
      {/* whatsapp redirect */}
      <View
        style={{
          backgroundColor: colors.wpGreen,
          alignSelf: "flex-end",
          borderRadius: 20,
          top: 20,
          right: 10,
        }}
      >
        <FontAwesome
          name="whatsapp"
          size={34}
          color={colors.white}
          onPress={() => {
            Linking.openURL("http://api.whatsapp.com/send?phone=962");
          }}
        />
      </View>
    </LinearGradient>
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
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: colors.green,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: colors.white,
    borderBottomColor: colors.green,
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
  newLogo: {
    backgroundColor: colors.green,
    width: "80%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,

    marginTop: 20,
    shadowColor: colors.white,
    shadowOffset: { width: -1, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  secondContainer: {
    flexDirection: "row",
    width: "90%",
    marginTop: 10,
    justifyContent: "space-between",
  },
  withdrawStyle: {
    backgroundColor: colors.green,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 20,
    shadowColor: colors.white,
    shadowOffset: { width: -1, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    flexDirection: "column",
  },
  depositeStyle: {
    backgroundColor: colors.green,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 20,
    shadowColor: colors.white,
    shadowOffset: { width: -1, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    flexDirection: "column",
  },
  ThirdPartystyle: {
    backgroundColor: colors.green,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 20,
    shadowColor: colors.white,
    shadowOffset: { width: -1, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    flexDirection: "column",
  },
});

export default Dashboard;
