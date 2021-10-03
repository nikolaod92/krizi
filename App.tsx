import React from "react";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorScheme, Dimensions } from "react-native";

import Home from "./screens/Home";
import { StatusBar } from "expo-status-bar";
import EStyleSheet from "react-native-extended-stylesheet";

const Stack = createNativeStackNavigator();

const { width } = Dimensions.get("window");
EStyleSheet.build({
  $rem: width > 340 ? 18 : 17
});

export default function App() {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: "Tiketi" }} />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}
