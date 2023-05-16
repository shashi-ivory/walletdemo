import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/Components/Screens/Authentication/Login/Login";
import { colors } from "./src/Components/Utils/color";
import Registration from "./src/Components/Screens/Authentication/Signup/Registration";
import Home from "./src/Components/Screens/Home/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.peach },
});
