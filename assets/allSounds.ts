import { AVPlaybackSource } from "expo-av/build/AV.types";

type Sound = {
  [key: string]: AVPlaybackSource;
};

export const sounds: Sound = {
  flashscore: require("./flashscore.mp3"),
  add: require("./add.mp3"),
  delete: require("./delete.mp3"),
  error: require("./error.wav")
};
