import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

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

const styles = EStyleSheet.create({
  inputContainer: {
    flex: 1,
    backgroundColor: "#EDEDED",
    borderRadius: 6,
    paddingHorizontal: "1.5rem",
    paddingVertical: "0.5rem"
  },
  input: {
    fontSize: "1rem",
    letterSpacing: 3,
    fontWeight: "bold",
    color: "gray"
  }
});
