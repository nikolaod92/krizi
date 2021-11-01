import React from "react";
import { TextInput, View, StyleSheet, TextInputProps } from "react-native";
import { useTheme } from "@react-navigation/native";

const Input: React.FC<TextInputProps> = ({ ...props }) => {
  const { colors } = useTheme();

  return (
    <View style={{ ...styles.inputContainer, backgroundColor: colors.border }}>
      <TextInput {...props} style={{ ...styles.input, color: colors.text }} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    borderRadius: 8,
    justifyContent: "center",
    marginRight: 10
  },
  input: {
    includeFontPadding: false,
    textAlignVertical: "center",
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    letterSpacing: 4,
    fontFamily: "medium"
  }
});
