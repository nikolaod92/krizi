import React, { useState } from "react";
import { Text, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { useTheme } from "@react-navigation/native";

import Button from "../components/Button";
import Input from "../components/Input";

const Home = () => {
  const { colors } = useTheme();
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Input />
      <Button
        title="Dodaj"
        color="red"
        icon="add"
        isLoading={loading}
        onClick={() => {
          setLoading(true);
          setTimeout(() => setLoading(false), 2000);
        }}
      />
    </View>
  );
};

export default Home;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
