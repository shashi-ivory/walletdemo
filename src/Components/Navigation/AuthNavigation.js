import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import Home from "../Screens/Home/Home";
import Registration from "../Screens/Authentication/Signup/Registration";
import LoginScreen from "../Screens/Authentication/Login/Login";
import { createStackNavigator } from "@react-navigation/stack";
import Withdraw from "../Screens/Withdraw/Withdraw";
import Deposit from "../Screens/Deposit/Deposit";
import ThirdParty from "../Screens/ThirdParty/ThirdParty";

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
          name="Withdraw"
          component={Withdraw}
          screenOptions={{ headerShown: false }}
        />
        <Stack.Screen
          name="Deposit"
          component={Deposit}
          screenOptions={{ headerShown: false }}
        />
        <Stack.Screen name="ThirdParty" component={ThirdParty} />
      </Stack.Navigator>
    </>
  );
}

export default AuthNavigation;
