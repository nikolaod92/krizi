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
import { fetchTicket } from "../api/fetch";

import { useSelector, useDispatch } from "react-redux";
import { addTicket } from "../redux/ticketsSlice";
import { RootState } from "../redux/store";

const Home = () => {
  const { colors } = useTheme();
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);

  const ticketList = useSelector((state: RootState) => state.persistedReducer.tickets);
  const dispatch = useDispatch();

  const handleClick = async () => {
    setLoading(true);
    const response = await fetchTicket(pin);
    if (response?.ticket != null) {
      dispatch(addTicket(response.ticket));
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Flex>
        <Input onChangeText={(text) => setPin(text)} />
        <Button
          title="Dodaj"
          color={colors.primary}
          icon="add"
          onClick={handleClick}
          isLoading={loading}
        />
      </Flex>
      <TicketList>
        {ticketList.map((ticket) => (
          <TicketListItem key={ticket.id} ticketId={ticket.id} />
        ))}
      </TicketList>
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
