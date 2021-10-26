import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Team } from "../types";
import Flex from "./ui/Flex";
import MyAppText from "./ui/MyAppText";

interface Props {
  team: Team;
}

const TeamInfo: React.FC<Props> = ({ team }) => {
  return (
    <Flex style={styles.container}>
      <Image
        style={{ height: 14, width: 14, marginRight: 2 }}
        source={{
          uri: team.badge
            ? team.badge
            : "https://www.clipartmax.com/png/middle/19-194678_blank-crest-clipart-1-fc-heidenheim.png"
        }}
      />
      <Flex>
        <MyAppText textType="semibold" size="md">
          {team.name}
        </MyAppText>
      </Flex>
    </Flex>
  );
};

export default TeamInfo;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 2
  }
});
