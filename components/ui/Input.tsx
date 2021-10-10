import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

interface InputProps {
  onChangeText?: () => void;
}

const Input: React.FC<InputProps> = ({ onChangeText }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={onChangeText}
        keyboardType="numeric"
        style={styles.input}
        maxLength={20}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    backgroundColor: "#EDEDED",
    borderRadius: 8,
    justifyContent: "center"
  },
  input: {
    includeFontPadding: false,
    textAlignVertical: "center",
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    letterSpacing: 3,
    fontFamily: "medium",
    color: "gray"
  }
});
