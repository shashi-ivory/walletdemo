import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
function MainNavigation() {
  return (
    <View>
      <NavigationContainer>
        <Stack.Navigator></Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default MainNavigation;
