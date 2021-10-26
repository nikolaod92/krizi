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
      textType="medium"
      color={colors.primary}
      style={{ ...styles.container, borderColor: colors.primary }}
    >
      {children}
    </MyAppText>
  );
};

export default Badge;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 12,
    textAlign: "center"
  }
});
