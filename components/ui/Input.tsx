import React from "react";
import { TextInput, View, StyleSheet, TextInputProps } from "react-native";
import { useTheme } from "@react-navigation/native";

interface InputProps {
  onChangeText?: (text: string) => void;
}

const Input: React.FC<InputProps> = ({ onChangeText }) => {
  const { colors } = useTheme();
  return (
    <View style={{ ...styles.inputContainer, backgroundColor: colors.border }}>
      <TextInput
        onChangeText={onChangeText}
        keyboardType="numeric"
        style={styles.input}
        maxLength={20}
        placeholder="PIN"
        placeholderTextColor="#cccccc"
      />
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
    fontFamily: "medium",
    color: "gray"
  }
});
