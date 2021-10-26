import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { RootStackParamList } from "../types";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import MatchInfo from "../components/MatchInfo";
import Flex from "./../components/ui/Flex";
import MyAppText from "../components/ui/MyAppText";
import { useTheme } from "@react-navigation/native";

type Props = NativeStackScreenProps<RootStackParamList, "Ticket">;

const Ticket = ({ route }: Props) => {
  const { id } = route.params;
  const { colors } = useTheme();

  const ticket = useSelector((state: RootState) =>
    state.persistedReducer.tickets.find((ticket) => ticket.id === id)
  );

  return (
    <ScrollView>
      <View>
        {ticket?.matches.map((match) => (
          <MatchInfo key={match.id} match={match} />
        ))}
      </View>
      <Flex
        style={{
          ...styles.ticketWinInfo,
          backgroundColor: colors.primary
        }}
      >
        <MyAppText textType="semibold" color="white" size="lg">
          {ticket?.stake}{" "}
          <MyAppText color="white" size="sm">
            din.
          </MyAppText>
        </MyAppText>
        <MyAppText textType="semibold" color="white" size="xl">
          {ticket?.win}{" "}
          <MyAppText color="white" size="sm">
            din.
          </MyAppText>
        </MyAppText>
      </Flex>
    </ScrollView>
  );
};

export default Ticket;

const styles = StyleSheet.create({
  ticketWinInfo: {
    padding: 8,

    justifyContent: "space-between"
  }
});