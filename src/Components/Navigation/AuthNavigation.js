import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import Home from "../Screens/Home/Home";
import Registration from "../Screens/Authentication/Signup/Registration";
import LoginScreen from "../Screens/Authentication/Login/Login";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function AuthNavigation() {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Home"
          screenOptions={{ headerShown: false }}
          component={Home}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          screenOptions={{ headerShown: false }}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          screenOptions={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
}

export default AuthNavigation;
