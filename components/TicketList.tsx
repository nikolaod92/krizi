import React from "react";
import { StyleSheet, View } from "react-native";

interface Props {
  children: React.ReactNode;
}

const TicketList: React.FC<Props> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default TicketList;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
