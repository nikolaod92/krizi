import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

interface Props {
  children: React.ReactNode;
  style?: ViewStyle;
}

const Flex: React.FC<Props> = ({ children, style }) => {
  return <View style={{ ...styles.container, ...style }}>{children}</View>;
};

export default Flex;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  }
});
