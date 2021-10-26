import { PixelRatio } from "react-native";

const fontSizeScaler = PixelRatio.get() / PixelRatio.getFontScale();

export const textSizes = {
  xs: 2 * fontSizeScaler,
  sm: 3 * fontSizeScaler,
  md: 4 * fontSizeScaler,
  lg: 5 * fontSizeScaler,
  xl: 6 * fontSizeScaler
};
