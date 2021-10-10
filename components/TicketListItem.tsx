import React from "react";
import { StyleSheet, View, Pressable, GestureResponderEvent } from "react-native";
import { useTheme } from "@react-navigation/native";

import IconButton from "./ui/IconButton";
import { Ionicons } from "@expo/vector-icons";
import MyAppText from "./ui/MyAppText";
import Flex from "./ui/Flex";
import Badge from "./ui/Badge";

interface Props {
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
}

const TicketListItem: React.FC<Props> = ({ onPress }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          { ...styles.info, backgroundColor: pressed ? colors.background : colors.card }
        ]}
      >
        <Flex>
          <Ionicons name="add" size={18} color="red" />
          <MyAppText size="lg">2092278985</MyAppText>
          <Badge>12</Badge>
        </Flex>
        <Flex>
          <Badge>100</Badge>
          <MyAppText size="xl" textType="medium">
            25.436 <MyAppText size="sm">din.</MyAppText>
          </MyAppText>
        </Flex>
      </Pressable>
      <IconButton icon="trash" color={colors.primary} />
    </View>
  );
};

export default TicketListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  },
  info: {
    flexDirection: "row",
    flex: 1,
    marginRight: 8,
    height: 32,
    paddingHorizontal: 8,
    marginVertical: 3,
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
    borderRadius: 8,
    elevation: 1
  },
  numberOfPairs: {
    width: 16,
    height: 16,
    paddingHorizontal: 0,
    borderWidth: 1,
    borderRadius: 8,
    textAlign: "center"
  }
});
