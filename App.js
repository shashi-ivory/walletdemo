import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "./src/Components/Utils/color";
import Registration from "./src/Components/Screens/Authentication/Signup/Registration";
import Home from "./src/Components/Screens/Home/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./src/Components/Screens/Authentication/Login/Login";
import "react-native-gesture-handler";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            screenOptions={{ headerShown: false }}
          />
          <Stack.Screen
            name="Registration"
            component={Registration}
            screenOptions={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            screenOptions={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.peach },
});
