import React from "react";
import { ColorValue, StyleSheet, Text, TextStyle } from "react-native";
import { textSizes as sizes } from "../../constants/sizes";
import { useTheme } from "@react-navigation/native";

interface Props {
  textType?: "light" | "regular" | "medium" | "semibold" | "bold";
  style?: TextStyle;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: ColorValue;
  children: React.ReactNode;
}

const MyAppText: React.FC<Props> = ({
  children,
  style,
  textType = "regular",
  size = "md",
  color
}) => {
  const { colors } = useTheme();
  return (
    <Text
      style={[
        styles.text,
        {
          ...style,
          fontFamily: textType,
          fontSize: sizes[size],
          color: color ? color : colors.text
        }
      ]}
    >
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
