import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "@react-navigation/native";

import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import TicketListItem from "../components/TicketListItem";
import TicketList from "../components/TicketList";
import Flex from "./../components/ui/Flex";
import { fetchTicket } from "../api/fetch";

import { useSelector, useDispatch } from "react-redux";
import { addTicket } from "../redux/ticketsSlice";
import { RootState } from "../redux/store";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const Home = ({ navigation }: Props) => {
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
          <TicketListItem
            onPress={() => {
              navigation.navigate("Ticket", { id: ticket.id });
            }}
            key={ticket.id}
            ticketId={ticket.id}
          />
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
  },
  ticketList: {}
});
