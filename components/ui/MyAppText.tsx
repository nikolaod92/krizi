import React from "react";
import { ColorValue, StyleSheet, Text, TextProps } from "react-native";
import { textSizes as sizes } from "../../constants/sizes";
import { useTheme } from "@react-navigation/native";

interface Props extends TextProps {
  textType?: "light" | "regular" | "medium" | "semibold" | "bold";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: ColorValue;
}

const MyAppText: React.FC<Props> = ({ textType = "regular", size = "md", color, ...props }) => {
  const { colors } = useTheme();
  return (
    <Text
      {...props}
      style={[
        props.style,
        styles.text,
        {
          fontFamily: textType,
          fontSize: sizes[size],
          color: color ? color : colors.text
        }
      ]}
    ></Text>
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
