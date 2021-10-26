export type Team = {
  name: string;
  score: number;
  badge: string | null;
};

export type Match = {
  id: string;
  date: string;
  odds: number;
  market: string;
  home: Team;
  away: Team;
  success: boolean;
};

export type Ticket = {
  id: string;
  stake: number;
  pairCount: number;
  win: string;
  matches: Match[];
};

export type Error = {
  message: string;
};

export type RootStackParamList = {
  Home: undefined;
  Ticket: { id: string };
};

export interface StringMap {
  [key: string]: string;
}
