import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Ticket, Error, Match } from "./types";

interface TicketResponse {
  ticket: Ticket | null;
  error: Error | null;
}

export const fetchTicket = async (pin: string): Promise<TicketResponse> => {
  let config: AxiosRequestConfig = {
    method: "post",
    url: "https://land.pinnbet.rs/scanticketapi/tickets/find",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    },
    data: JSON.stringify([pin])
  };
  let ticket = null;
  let error = null;
  try {
    const response: AxiosResponse<any> = await axios(config);
    const { stake, maximumPossibleWinAmountWithBonus, pairsCount, pin } = response.data[0];
    const fetchedMatches = response.data[0].ticketSystems[0].ticketPairs;
    const matches: Match[] = fetchedMatches.map((match: any): Match => {
      return {
        id: match.eventId,
        date: match.eventStartTime,
        odds: match.oddsFirst,
        market: match.selectionCodeFirst,
        home: {
          name: match.homeTeamName,
          score: 0
        },
        away: {
          name: match.awayTeamName,
          score: 0
        },
        success: false
      };
    });
    ticket = {
      id: pin,
      stake,
      pairCount: pairsCount,
      win: maximumPossibleWinAmountWithBonus,
      matches
    };
  } catch (err) {
    error = {
      message: "Tiket ne postoji."
    };
  }

  return { ticket, error };
};
