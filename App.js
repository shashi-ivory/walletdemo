import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "./src/Components/Utils/color";
import MainNavigation from "./src/Components/Navigation/MainNavigation";
import AuthNavigation from "./src/Components/Navigation/AuthNavigation";

import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <MainNavigation />
        {/* <AuthNavigation /> */}
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
