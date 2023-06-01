import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import "react-native-gesture-handler";
import Home from "../Screens/Home/Home";
import LoginScreen from "../Screens/Authentication/Login/Login";
import Registration from "../Screens/Authentication/Signup/Registration";
import AuthNavigation from "./AuthNavigation";
import { View } from "react-native";
import StackNavigation from "./StackNavigation";
import { createStackNavigator } from "@react-navigation/stack";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function MainNavigation() {
  const [isLoding, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const dispatch = useDispatch();
  const token = useSelector(
    (state) => state?.user?.loginData?.data?.data[0]?.token
  );
  console.log("Token+++++++", token);
  const Stack = createStackNavigator();
  return (
    <>
      {!token ? (
        <>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="AuthNavigation"
              component={AuthNavigation}
              screenOptions={{ headerShown: false }}
            />
          </Stack.Navigator>
        </>
      ) : (
        <>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="StackNavigation"
              component={StackNavigation}
              screenOptions={{ headerShown: false }}
            />
          </Stack.Navigator>
        </>
      )}
    </>
  );
}

export default MainNavigation;
