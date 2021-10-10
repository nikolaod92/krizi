import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";

import AppLoading from "expo-app-loading";
import { useFonts } from "@expo-google-fonts/poppins";
import fonts from "./assets/fonts";

import Home from "./screens/Home";

import MyTheme from "./constants/MyTheme";

const Stack = createNativeStackNavigator();

export default function App() {
  const scheme = useColorScheme();

  let [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer theme={scheme === "dark" ? DarkTheme : MyTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ title: "Tiketi" }} />
        </Stack.Navigator>
        <StatusBar />
      </NavigationContainer>
    );
  }
}
