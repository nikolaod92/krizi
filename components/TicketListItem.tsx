import React, { useEffect, useRef } from "react";
import { StyleSheet, Image, Pressable, GestureResponderEvent, Animated } from "react-native";
import { useTheme } from "@react-navigation/native";

import IconButton from "./ui/IconButton";
import MyAppText from "./ui/MyAppText";
import Flex from "./ui/Flex";
import Badge from "./ui/Badge";
import { useSelector, useDispatch } from "react-redux";
import { deleteTicket } from "../redux/ticketsSlice";
import { RootState } from "../redux/store";
import { playSound } from "../utils/sound";

interface Props {
  ticketId: string;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
}

const TicketListItem: React.FC<Props> = ({ ticketId, onPress }) => {
  const { colors } = useTheme();

  const dispatch = useDispatch();
  const ticket = useSelector((state: RootState) =>
    state.persistedReducer.tickets.find((ticket) => ticket.id === ticketId)
  );

  const handleDelete = () => {
    playSound("delete");
    dispatch(deleteTicket(ticketId));
  };

  const animatedValue = useRef(new Animated.Value(-300)).current;
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        transform: [{ translateX: animatedValue }],
        flexDirection: "row",
        alignItems: "center"
      }}
    >
      <Pressable
        onPress={onPress}
        android_ripple={{ color: colors.background }}
        style={{ ...styles.info, backgroundColor: colors.card }}
      >
        <Flex>
          <Image style={styles.icon} source={require("../assets/pinnbet.png")} />
          <MyAppText size="md" textType="light">
            {ticketId}
          </MyAppText>
          <Badge>{ticket?.pairCount}</Badge>
        </Flex>
        <Flex>
          <Badge>{ticket?.stake}</Badge>
          <MyAppText size="lg" textType="medium">
            {ticket?.win}
            <MyAppText size="sm"> din.</MyAppText>
          </MyAppText>
        </Flex>
      </Pressable>
      <IconButton icon="trash" color={colors.primary} onClick={handleDelete} />
    </Animated.View>
  );
};

export default TicketListItem;

const styles = StyleSheet.create({
  info: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "white",
    height: 36,
    paddingHorizontal: 8,
    marginVertical: 4,
    marginRight: 8,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 8,
    elevation: 1,
    overflow: "hidden"
  },
  icon: {
    width: 16,
    height: 16
  }
});
