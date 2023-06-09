import React from "react";
import { StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MyAppText from "./MyAppText";

interface Props {
  error: string;
  handlePress?: () => void;
}

const Error: React.FC<Props> = ({ error, handlePress }) => {
  return (
    <Pressable
      style={{ ...styles.errorContainer, backgroundColor: "#ffa7a1" }}
      onPress={handlePress}
    >
      <MyAppText size='lg' color='white'>
        {error}
      </MyAppText>
      <Ionicons name='close' size={20} color='white' />
    </Pressable>
  );
};

export default Error;

const styles = StyleSheet.create({
  errorContainer: {
    flexDirection: "row",
    backgroundColor: "red",
    borderRadius: 10,
    padding: 8,
    marginTop: 12,
    alignItems: "center",
    justifyContent: "space-between"
  }
});
