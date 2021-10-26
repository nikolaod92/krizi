import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { Match, RootStackParamList, Team } from "../types";
import Flex from "./ui/Flex";
import MyAppText from "./ui/MyAppText";
import { formatDate } from "./../utils/formatter";
import { RouteProp, useRoute, useTheme } from "@react-navigation/native";
import TeamInfo from "./TeamInfo";
import { useDispatch } from "react-redux";
import { changeScore } from "../redux/ticketsSlice";

interface Props {
  match: Match;
  handleSuccess: (matchId: string) => void;
}

type TicketScreenRouteProp = RouteProp<RootStackParamList, "Ticket">;

const MatchInfo: React.FC<Props> = ({ match, handleSuccess }) => {
  const { date, time } = formatDate(match.date);
  const { colors } = useTheme();
  const { params } = useRoute<TicketScreenRouteProp>();
  const dispatch = useDispatch();

  const handleScoreChange = (teamName: string, score: number) => {
    if (params) dispatch(changeScore({ teamName, score, ticketId: params.id, matchId: match.id }));
  };

  return (
    <Flex
      style={{
        ...styles.container,
        backgroundColor: match.success ? colors.card : colors.background
      }}
    >
      <Flex>
        <View style={styles.dateTime}>
          <MyAppText size="sm" textType="light">
            {date}
          </MyAppText>
          <MyAppText size="sm" textType="light">
            {time}
          </MyAppText>
        </View>
        <View>
          <TeamInfo handlePress={handleScoreChange} team={match.home} />
          <TeamInfo handlePress={handleScoreChange} team={match.away} />
        </View>
      </Flex>
      <Flex>
        <Pressable style={styles.market} onPress={() => handleSuccess(match.id)}>
          <MyAppText style={{ letterSpacing: 1 }} size="sm" textType="light">
            {match.market}
            {match.pointLine && match.pointLine.toFixed(1)}
          </MyAppText>
          <MyAppText color={match.success ? "green" : colors.text} textType="semibold">
            {match.odds.toFixed(2)}
          </MyAppText>
        </Pressable>
        <View style={styles.score}>
          <MyAppText textType="semibold" size="lg" color={colors.primary}>
            {match.home.score}
          </MyAppText>
          <MyAppText textType="semibold" size="lg" color={colors.primary}>
            {match.away.score}
          </MyAppText>
        </View>
      </Flex>
    </Flex>
  );
};

export default MatchInfo;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderBottomColor: "#eaeaea"
  },
  dateTime: {
    paddingLeft: 6,
    marginRight: 2,
    alignItems: "center"
  },
  score: {
    minWidth: 40,
    alignItems: "center",
    justifyContent: "center",
    borderLeftWidth: 2,
    borderLeftColor: "#eaeaea",
    marginLeft: 4,
    paddingVertical: 6
  },
  market: {
    position: "relative",
    minWidth: 48,
    alignItems: "center"
  },
  image: {
    position: "absolute",
    top: -7,
    left: 1,
    width: 46,
    height: 42
  }
});
