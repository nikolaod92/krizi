import React from "react";
import { StyleSheet, View, Pressable, GestureResponderEvent } from "react-native";
import { useTheme } from "@react-navigation/native";

import IconButton from "./ui/IconButton";
import { Ionicons } from "@expo/vector-icons";
import MyAppText from "./ui/MyAppText";
import Flex from "./ui/Flex";
import Badge from "./ui/Badge";
import { useSelector, useDispatch } from "react-redux";
import { deleteTicket } from "../redux/ticketsSlice";
import { RootState } from "../redux/store";
import { useSpring, animated } from "@react-spring/native";

interface Props {
  ticketId: string;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
}

const TicketListItem: React.FC<Props> = ({ ticketId, onPress }) => {
  const { colors } = useTheme();
  const fadeInProps = useSpring<any>({ from: { opacity: 0 }, to: { opacity: 1 } });

  const dispatch = useDispatch();
  const ticket = useSelector((state: RootState) =>
    state.persistedReducer.tickets.find((ticket) => ticket.id === ticketId)
  );

  const handleDelete = () => {
    dispatch(deleteTicket(ticketId));
  };

  const AnimatedPressable = animated(Pressable);

  return (
    <Flex>
      <AnimatedPressable onPress={onPress} style={[styles.info, fadeInProps]}>
        <Flex>
          <Ionicons name="add" size={18} color="red" />
          <MyAppText size="md">{ticketId}</MyAppText>
          <Badge>{ticket?.pairCount}</Badge>
        </Flex>
        <Flex>
          <Badge>{ticket?.stake}</Badge>
          <MyAppText size="lg" textType="medium">
            {ticket?.win}
            <MyAppText size="sm"> din.</MyAppText>
          </MyAppText>
        </Flex>
      </AnimatedPressable>
      <IconButton icon="trash" color={colors.primary} onClick={handleDelete} />
    </Flex>
  );
};

export default TicketListItem;

const styles = StyleSheet.create({
  info: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "white",
    marginRight: 8,
    height: 32,
    paddingHorizontal: 8,
    marginVertical: 4,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 8,
    elevation: 1,
    overflow: "hidden"
  }
});
