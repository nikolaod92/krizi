import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Match } from "../types";
import Flex from "./ui/Flex";
import MyAppText from "./ui/MyAppText";
import { formatDate } from "./../utils/formatter";
import { colors } from "@react-spring/shared";
import { useTheme } from "@react-navigation/native";
import TeamInfo from "./TeamInfo";

interface Props {
  match: Match;
}

const MatchInfo: React.FC<Props> = ({ match }) => {
  const { date, time } = formatDate(match.date);
  const { colors } = useTheme();

  return (
    <Flex style={styles.container}>
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
          <TeamInfo team={match.home} />
          <TeamInfo team={match.away} />
        </View>
      </Flex>
      <Flex>
        <MyAppText style={{ letterSpacing: 1 }} size="sm" textType="light">
          {match.market}
        </MyAppText>
        <MyAppText textType="semibold">{match.odds.toFixed(2)}</MyAppText>
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
    marginVertical: 1,
    backgroundColor: "white"
  },
  dateTime: {
    paddingLeft: 6,
    marginRight: 2,
    alignItems: "center"
  },
  score: {
    borderLeftWidth: 1,
    borderLeftColor: "#eaeaea",
    marginLeft: 6,
    paddingHorizontal: 10,
    paddingVertical: 4
  }
});
