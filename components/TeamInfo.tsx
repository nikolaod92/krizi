import React from "react";
import { StyleSheet, Image, Pressable } from "react-native";
import { Team } from "../types";
import Flex from "./ui/Flex";
import MyAppText from "./ui/MyAppText";
import { useTheme } from "@react-navigation/native";

interface Props {
  team: Team;
  handlePress: (teamName: string, score: number) => void;
  losing: boolean;
}

const TeamInfo: React.FC<Props> = ({ team, handlePress, losing }) => {
  const { colors } = useTheme();

  const imageUri = team.badge ? { uri: team.badge } : require("../assets/badge-light.png");

  return (
    <Pressable
      onPress={() => handlePress(team.name, 1)}
      onLongPress={() => {
        if (team.score != 0) handlePress(team.name, -1);
      }}
      delayLongPress={250}
    >
      <Flex style={styles.container}>
        <Image style={styles.image} source={imageUri} />
        <MyAppText textType='semibold' color={losing ? "#969696" : colors.text}>
          {team.name}
        </MyAppText>
      </Flex>
    </Pressable>
  );
};

export default TeamInfo;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 2
  },
  image: {
    height: 16,
    width: 16,
    marginRight: 2
  }
});
