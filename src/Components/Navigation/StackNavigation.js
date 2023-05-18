import React from "react";
import { View } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import "react-native-gesture-handler";

import { createStackNavigator } from "@react-navigation/stack";
import Withdraw from "../Screens/Withdraw/Withdraw";

function StackNavigation() {
  const Stack = createStackNavigator();
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator>
        <Stack.Screen
          name="Withdraw"
          component={Withdraw}
          screenOptions={{ headerShown: false }}
        />
      </Stack.Navigator>
    </View>
  );
}

export default StackNavigation;
