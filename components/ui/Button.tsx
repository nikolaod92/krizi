import React from "react";
import Color from "color";
import { ActivityIndicator, Pressable, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSpring, animated } from "@react-spring/native";
import MyAppText from "./MyAppText";

interface Props {
  title: string;
  color: string;
  icon?: React.ComponentProps<typeof Ionicons>["name"];
  isLoading?: boolean;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ title, color, icon, isLoading, onClick }) => {
  const fadeOutProps = useSpring({ opacity: isLoading ? 1 : 0 });
  const fadeInProps = useSpring({ opacity: isLoading ? 0 : 1 });

  return (
    <Pressable
      onPress={onClick}
      style={({ pressed }) => [
        styles.container,
        { backgroundColor: pressed ? Color(color).darken(0.1).toString() : color }
      ]}
    >
      {isLoading ? (
        <animated.View style={fadeOutProps}>
          <ActivityIndicator size="small" color="white" />
        </animated.View>
      ) : (
        <animated.View style={[fadeInProps, styles.button]}>
          <Ionicons name={icon} size={18} color="white" />
          <MyAppText textType="bold" size="lg" style={styles.text}>
            {title}
          </MyAppText>
        </animated.View>
      )}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 8,
    elevation: 3,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    textAlign: "center",
    color: "white",
    letterSpacing: 0.25,
    marginLeft: 8
  }
});
