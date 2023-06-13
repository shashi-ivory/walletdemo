import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import Home from "../Screens/Home/Home";
import Registration from "../Screens/Authentication/Signup/Registration";
import LoginScreen from "../Screens/Authentication/Login/Login";
import { createStackNavigator } from "@react-navigation/stack";
import Register_Otp from "../Screens/Authentication/Signup/Register_Otp";
import ForgotPassword from "../Screens/Authentication/Login/ForgotPassword";

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
        <Stack.Screen
          name="Register_Otp"
          component={Register_Otp}
          screenOptions={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          screenOptions={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
}

export default AuthNavigation;
