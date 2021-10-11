export type Team = {
  name: string;
  score: number;
};

export type Match = {
  id: string;
  date: Date;
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
  win: number;
  matches: [Match];
};

export type Error = {
  message: string;
};
