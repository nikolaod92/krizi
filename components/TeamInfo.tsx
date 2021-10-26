import { useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Team } from "../types";
import Flex from "./ui/Flex";
import MyAppText from "./ui/MyAppText";

interface Props {
  team: Team;
  handlePress: (teamName: string, score: number) => void;
}

const TeamInfo: React.FC<Props> = ({ team, handlePress }) => {
  return (
    <Pressable
      onPress={() => handlePress(team.name, 1)}
      onLongPress={() => {
        if (team.score != 0) handlePress(team.name, -1);
      }}
      delayLongPress={250}
    >
      <Flex style={styles.container}>
        <Image
          style={{ height: 14, width: 14, marginRight: 2 }}
          source={{
            uri: team.badge
              ? team.badge
              : "https://www.clipartmax.com/png/middle/19-194678_blank-crest-clipart-1-fc-heidenheim.png"
          }}
        />

        <MyAppText textType="semibold" size="md">
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
  }
});
