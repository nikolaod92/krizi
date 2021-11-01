import React from "react";
import { StyleSheet } from "react-native";

import Home from "../screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "@react-navigation/native";
import Ticket from "../screens/Ticket";
import { RootStackParamList } from "../types";
import MyAppText from "./../components/ui/MyAppText";

const Stack = createNativeStackNavigator<RootStackParamList>();

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
            color: "white"
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
        options={({ route }) => ({
          headerTitle: () => (
            <MyAppText textType="medium" color="white" size="xl">
              {route.params.id}
            </MyAppText>
          ),
          animation: "slide_from_right",

          headerStyle: {
            backgroundColor: colors.primary
          },
          headerTintColor: colors.card
        })}
      />
    </Stack.Navigator>
  );
};

export default MyStack;

const styles = StyleSheet.create({});
