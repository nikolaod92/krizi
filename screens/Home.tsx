import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "@react-navigation/native";

import Button from "../components/ui/Button";
import IconButton from "../components/ui/IconButton";
import Input from "../components/ui/Input";
import MyAppText from "../components/ui/MyAppText";
import TicketListItem from "../components/TicketListItem";
import TicketList from "../components/TicketList";
import Flex from "./../components/ui/Flex";
import useFetch from "./../hooks/useFetch";

const Home = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Flex>
        <Input />
        <Button title="Dodaj" color={colors.primary} icon="add-circle-outline" />
      </Flex>
      <Flex>
        <TicketList>
          <TicketListItem />
          <TicketListItem />
          <TicketListItem />
          <TicketListItem />
        </TicketList>
      </Flex>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    alignItems: "center",
    padding: 12
  },
  text: {
    fontSize: 16
  }
});
