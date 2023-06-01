import React from "react";
import { View } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import Withdraw from "../Screens/Withdraw/Withdraw";
import Deposit from "../Screens/Deposit/Deposit";
import ThirdParty from "../Screens/ThirdParty/ThirdParty";
import OTPScreen from "../Screens/Authentication/Otp/OTPScreen";
import PaymentMethod from "../Screens/Deposit/PaymentMethod/PaymentMethod";
import Dashboard from "../Screens/Dashboard/Dashboard";
const Stack = createStackNavigator();
function StackNavigation() {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen
          name="PaymentMethod"
          component={PaymentMethod}
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
        <Stack.Screen
          name="ThirdParty"
          component={ThirdParty}
          screenOptions={{ headerShown: false }}
        />
        <Stack.Screen
          name="OTPScreen"
          component={OTPScreen}
          screenOptions={{ headerShown: false }}
        />
      </Stack.Navigator>
    </View>
  );
}

export default StackNavigation;
