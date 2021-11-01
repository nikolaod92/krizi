import { Audio } from "expo-av";
import { sounds } from "../assets/allSounds";

export async function playSound(soundFile: string) {
  const { sound } = await Audio.Sound.createAsync(sounds[soundFile]);
  await sound.playAsync();
}
