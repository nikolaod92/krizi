import React, { useState } from "react";
import Color from "color";
import { ActivityIndicator, Pressable, StyleSheet } from "react-native";
import { useSpring, animated } from "@react-spring/native";
import MyAppText from "./MyAppText";

interface Props {
  title: string;
  color: string;
  isLoading?: boolean;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ title, color, isLoading, onClick }) => {
  const fadeInProps = useSpring({ opacity: isLoading ? 0 : 1 });
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>();

  return (
    <Pressable
      onLayout={(e) => {
        const { width, height } = e.nativeEvent.layout;
        setDimensions({ width, height });
      }}
      onPress={onClick}
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor: pressed ? Color(color).darken(0.1).toString() : color,
          ...dimensions
        }
      ]}
    >
      {isLoading ? (
        <animated.View>
          <ActivityIndicator size='small' color='white' />
        </animated.View>
      ) : (
        <animated.View style={[fadeInProps, styles.button]}>
          <MyAppText color='white' textType='bold' size='lg' style={styles.text}>
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
    paddingHorizontal: 24,
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
    marginLeft: 4,
    letterSpacing: 0.25
  },
  icon: {
    marginLeft: 24
  }
});
