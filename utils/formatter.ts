import { StringMap } from "../types";
import { marketMap } from "./marketMap";
import { teamMap } from "./teamMap";

export const formatWin = (win: number): string => {
  return win
    .toFixed(0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const formatMarket = (market: string): string => {
  return marketMap[market] ? marketMap[market] : market;
};

export const formatDate = (date: string) => {
  const dateString = `${date.slice(8, 10)}.${date.slice(5, 7)}.`;
  let timeString = new Date(date);
  timeString.setHours(timeString.getHours() + 1);
  const time = timeString.toISOString().slice(11, 16);

  return { date: dateString, time };
};

export const formatName = (name: string): string => {
  const replaceMap: StringMap = {
    " ": "+",
    "Utd.": "United",
    Utd: "United",
    U19: "",
    U21: "",
    U23: "",
    II: ""
  };

  let regex = new RegExp(Object.keys(replaceMap).join("|"), "g");

  let formatted = name;
  if (teamMap[name]) {
    return teamMap[name];
  }

  return formatted.replace(regex, (match) => {
    return replaceMap[match];
  });
};
