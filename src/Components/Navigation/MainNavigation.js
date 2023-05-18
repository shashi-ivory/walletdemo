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

function MainNavigation() {
  const Stack = createStackNavigator();
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="AuthNavigation"
          component={AuthNavigation}
          screenOptions={{ headerShown: false }}
        />
        <Stack.Screen
          name="StackNavigation"
          component={StackNavigation}
          screenOptions={{ headerShown: false }}
        />
      </Stack.Navigator>
    </View>
  );
}

export default MainNavigation;
