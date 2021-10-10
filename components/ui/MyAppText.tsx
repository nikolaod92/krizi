import React from "react";
import { StyleSheet, Text, TextStyle } from "react-native";
import { textSizes as sizes } from "../../constants/sizes";

interface Props {
  textType?: "light" | "regular" | "medium" | "semibold" | "bold";
  style?: TextStyle;
  size?: "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
}

const MyAppText: React.FC<Props> = ({ children, style, textType = "regular", size = "md" }) => {
  return (
    <Text style={[styles.text, { ...style, fontFamily: textType, fontSize: sizes[size] }]}>
      {children}
    </Text>
  );
};

export default MyAppText;

const styles = StyleSheet.create({
  text: {
    includeFontPadding: false,
    textAlignVertical: "center",
    paddingHorizontal: 6
  }
});
