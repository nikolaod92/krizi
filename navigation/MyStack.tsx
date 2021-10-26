import React from "react";
import { StyleSheet } from "react-native";

import Home from "../screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "@react-navigation/native";
import Ticket from "../screens/Ticket";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Moji tiketi",
          headerTitleStyle: {
            fontFamily: "medium",
            color: colors.card
          },
          headerStyle: {
            backgroundColor: colors.primary
          },
          headerTintColor: colors.card
        }}
      />
      <Stack.Screen
        name="Ticket"
        component={Ticket}
        options={{
          title: "",
          headerTitleStyle: {
            fontFamily: "medium",
            color: colors.card
          },
          headerStyle: {
            backgroundColor: colors.primary
          },
          headerTintColor: colors.card
        }}
      />
    </Stack.Navigator>
  );
};

export default MyStack;

const styles = StyleSheet.create({});
