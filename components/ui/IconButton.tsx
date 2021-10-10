import React from "react";
import { StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  color?: string;
  icon?: React.ComponentProps<typeof Ionicons>["name"];
  onClick?: () => void;
}

const IconButton: React.FC<Props> = ({ icon, color, onClick }) => {
  return (
    <Pressable onPress={onClick} style={[styles.container, { backgroundColor: color }]}>
      <Ionicons name={icon} size={16} color="white" />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2
  }
});
