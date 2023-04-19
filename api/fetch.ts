import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Ticket, Error, Match } from "../types";
import { formatMarket, formatName, formatWin } from "./../utils/formatter";

interface TicketResponse {
  ticket: Ticket | null;
  error: Error | null;
}

const getBadge = async (name: string): Promise<string | null> => {
  try {
    const team: AxiosResponse<any> = await axios.get(
      `https://www.thesportsdb.com/api/v1/json/2/searchteams.php?t=${name}`
    );
    if (team.data?.teams) {
      return team.data?.teams[0].strTeamBadge;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
  return null;
};

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
    console.log(response);

    const matchPromises: Promise<Match>[] = fetchedMatches.map(
      async (match: any): Promise<Match> => {
        const homeBadge = await getBadge(formatName(match.homeTeamName));
        const awayBadge = await getBadge(formatName(match.awayTeamName));

        return {
          id: match.eventId,
          date: match.eventStartTime,
          odds: match.oddsFirst,
          market: formatMarket(match.selectionCodeFirst),
          pointLine:
            match.marketCodeFirstMarketBandFirst === "NA"
              ? null
              : +match.marketCodeFirstMarketBandFirst,
          home: {
            name: match.homeTeamName,
            score: 0,
            badge: homeBadge
          },
          away: {
            name: match.awayTeamName,
            score: 0,
            badge: awayBadge
          },
          success: false
        };
      }
    );

    const matches: Match[] = await Promise.all(matchPromises);

    ticket = {
      id: pin,
      stake,
      pairCount: pairsCount,
      win: formatWin(maximumPossibleWinAmountWithBonus),
      matches
    };
    console.log(ticket);
  } catch (err) {
    error = {
      message: "Tiket ne postoji."
    };
  }

  return { ticket, error };
};
