import React from "react";
import { StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";

import MyAppText from "./MyAppText";

interface Props {
  children: React.ReactNode;
}

const Badge: React.FC<Props> = ({ children }) => {
  const { colors } = useTheme();

  return (
    <MyAppText
      size="sm"
      textType="regular"
      style={{ ...styles.container, backgroundColor: colors.primary, color: colors.card }}
    >
      {children}
    </MyAppText>
  );
};

export default Badge;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 8,
    textAlign: "center"
  }
});
