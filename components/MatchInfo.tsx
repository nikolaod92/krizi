import React, { useEffect, useRef } from "react";
import { Pressable, StyleSheet, View, Animated } from "react-native";
import { RouteProp, useRoute, useTheme } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { changeScore } from "../redux/ticketsSlice";

import { Match, RootStackParamList } from "../types";
import { formatDate } from "./../utils/formatter";

import Flex from "./ui/Flex";
import TeamInfo from "./TeamInfo";
import MyAppText from "./ui/MyAppText";
import { playSound } from "../utils/sound";

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

  const animatedValue = useRef(new Animated.Value(0)).current;
  const interpolateColors = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [colors.background, colors.card]
  });

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: match.success ? 100 : 0,
      duration: 200,
      useNativeDriver: false
    }).start();
  }, [match.success]);

  const handleScoreChange = (teamName: string, score: number) => {
    if (params) {
      if (score > 0) playSound("flashscore");
      dispatch(changeScore({ teamName, score, ticketId: params.id, matchId: match.id }));
    }
  };

  return (
    <Animated.View
      style={{
        ...styles.container,
        backgroundColor: interpolateColors,
        borderBottomColor: colors.border
      }}
    >
      <Flex>
        <View style={styles.dateTime}>
          <MyAppText size='sm' textType='light'>
            {date}
          </MyAppText>
          <MyAppText size='sm' textType='light'>
            {time}
          </MyAppText>
        </View>
        <View>
          <TeamInfo
            handlePress={handleScoreChange}
            losing={match.home.score < match.away.score}
            team={match.home}
          />
          <TeamInfo
            handlePress={handleScoreChange}
            losing={match.home.score > match.away.score}
            team={match.away}
          />
        </View>
      </Flex>
      <Flex>
        <Pressable style={styles.market} onPress={() => handleSuccess(match.id)}>
          <MyAppText style={{ letterSpacing: 0.5 }} size='sm' textType='light'>
            {match.market}
            {match.pointLine && match.pointLine.toFixed(1)}
          </MyAppText>
          <MyAppText color={match.success ? "green" : colors.text} textType='semibold'>
            {match.odds.toFixed(2)}
          </MyAppText>
        </Pressable>
        <View style={{ ...styles.score, borderLeftColor: colors.border }}>
          <MyAppText textType='semibold' size='lg' color={colors.primary}>
            {match.home.score}
          </MyAppText>
          <MyAppText textType='semibold' size='lg' color={colors.primary}>
            {match.away.score}
          </MyAppText>
        </View>
      </Flex>
    </Animated.View>
  );
};

export default MatchInfo;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    borderBottomWidth: 1,
    flexDirection: "row"
  },
  dateTime: {
    paddingLeft: 6,
    alignItems: "center"
  },
  score: {
    minWidth: 40,
    alignItems: "center",
    justifyContent: "center",
    borderLeftWidth: 1,
    marginLeft: 4,
    paddingVertical: 6
  },
  market: {
    minWidth: 48,
    alignItems: "center"
  }
});
