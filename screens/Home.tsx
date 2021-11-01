import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "@react-navigation/native";

import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import TicketListItem from "../components/TicketListItem";
import TicketList from "../components/TicketList";
import Flex from "./../components/ui/Flex";
import Error from "./../components/ui/Error";
import { fetchTicket } from "../api/fetch";

import { useSelector, useDispatch } from "react-redux";
import { addTicket } from "../redux/ticketsSlice";
import { RootState } from "../redux/store";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { playSound } from "../utils/sound";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const Home = ({ navigation }: Props) => {
  const { colors } = useTheme();
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const ticketList = useSelector((state: RootState) => state.persistedReducer.tickets);
  const dispatch = useDispatch();

  const handleClick = async () => {
    setError("");
    setLoading(true);

    if (pin.length !== 10) {
      playSound("error");
      setError("Pin mora imati 10 brojeva.");
      setLoading(false);
      return;
    }

    const ticketAlreadyInState = ticketList.find((ticket) => ticket.id === pin);
    if (ticketAlreadyInState) {
      playSound("error");
      setError("Tiket je već u listi.");
      setLoading(false);
      return;
    }

    const response = await fetchTicket(pin);
    if (response?.ticket != null) {
      playSound("add");
      dispatch(addTicket(response.ticket));
    }
    setLoading(false);
  };

  return (
    <View style={{ ...styles.container, backgroundColor: colors.background }}>
      <Flex>
        <Input onChangeText={(text) => setPin(text)} />
        <Button title="Dodaj" color={colors.primary} onClick={handleClick} isLoading={loading} />
      </Flex>
      <TicketList>
        {ticketList.map((ticket) => (
          <TicketListItem
            onPress={() => {
              navigation.navigate("Ticket", { id: ticket.id });
            }}
            key={ticket.id}
            ticketId={ticket.id}
          />
        ))}
        {error ? <Error error={error} handlePress={() => setError("")} /> : null}
      </TicketList>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 12
  },
  text: {
    fontSize: 16
  },
  ticketList: {}
});
