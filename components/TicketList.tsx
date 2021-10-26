import React from "react";
import { StyleSheet, ScrollView } from "react-native";

interface Props {
  children: React.ReactNode;
}

const TicketList: React.FC<Props> = ({ children }) => {
  return <ScrollView style={styles.container}>{children}</ScrollView>;
};

export default TicketList;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 6
  }
});
