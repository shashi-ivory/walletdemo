import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../Utils/color";
import { AntDesign } from "@expo/vector-icons";

const Deposit = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Deposit</Text>
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

export default Deposit;
