import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { useColorScheme } from "react-native";

import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

import AppLoading from "expo-app-loading";
import { useFonts } from "@expo-google-fonts/poppins";
import fonts from "./assets/fonts";

import MyTheme from "./constants/MyTheme";
import MyDarkTheme from "./constants/MyDarkTheme";
import MyStack from "./navigation/MyStack";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const scheme = useColorScheme();

  let [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer theme={scheme === "dark" ? MyDarkTheme : MyTheme}>
            <MyStack />
            <StatusBar style="light" />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}
