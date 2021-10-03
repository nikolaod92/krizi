import React from "react";
import Color from "color";
import { ActivityIndicator, Pressable, Text } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { Ionicons } from "@expo/vector-icons";
import { useSpring, animated } from "@react-spring/native";

interface ButtonProps {
  title: string;
  color: string;
  icon?: React.ComponentProps<typeof Ionicons>["name"];
  isLoading?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, color, icon, isLoading, onClick }) => {
  const fadeOutProps = useSpring({ opacity: isLoading ? 1 : 0 });
  const fadeInProps = useSpring({ opacity: isLoading ? 0 : 1 });

  return (
    <Pressable
      onPress={onClick}
      style={({ pressed }) => [
        styles.container,
        { backgroundColor: pressed ? Color(color).lighten(0.2).toString() : color }
      ]}
    >
      {isLoading ? (
        <animated.View style={fadeOutProps}>
          <ActivityIndicator size="small" color="white" />
        </animated.View>
      ) : (
        <animated.View style={[fadeInProps, styles.button]}>
          <Ionicons name={icon} size={20} color="white" />
          <Text style={styles.text}>{title}</Text>
        </animated.View>
      )}
    </Pressable>
  );
};

export default Button;

const styles = EStyleSheet.create({
  container: {
    width: "8rem",
    height: "3rem",
    margin: 4,
    borderRadius: 6,
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
    fontSize: "1rem",
    lineHeight: 21,
    fontWeight: "bold",
    marginLeft: "0.5rem",
    color: "white",
    letterSpacing: 0.25
  }
});
