import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../Utils/color";

const ThirdParty = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Text>ThirdParty</Text>
      <View
        style={{
          left: 380,
          top: 30,
          position: "absolute",
          fontWeight: "bold",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <AntDesign name="closecircleo" size={24} color={colors.peach} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ThirdParty;
