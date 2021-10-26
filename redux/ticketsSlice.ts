import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Team, Ticket } from "../types";

interface TicketsState {
  tickets: Ticket[];
}

const initialState: TicketsState = { tickets: [] };

const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    addTicket(state, action: PayloadAction<Ticket>) {
      state.tickets = [...state.tickets, action.payload];
    },
    deleteTicket(state, action: PayloadAction<string>) {
      state.tickets = state.tickets.filter((ticket) => ticket.id !== action.payload);
    },
    updateSuccess(state, action: PayloadAction<{ ticketId: string; matchId: string }>) {
      const ticket = state.tickets.find((ticket) => ticket.id === action.payload.ticketId);
      const match = ticket?.matches.find((match) => match.id === action.payload.matchId);
      if (match) match.success = !match?.success;
    },
    changeScore(
      state,
      action: PayloadAction<{ teamName: string; score: number; ticketId: string; matchId: string }>
    ) {
      const ticket = state.tickets.find((ticket) => ticket.id === action.payload.ticketId);
      const match = ticket?.matches.find((match) => match.id === action.payload.matchId);
      if (match) {
        if (match.home.name === action.payload.teamName) {
          match.home.score = match.home.score + action.payload.score;
        } else {
          match.away.score = match.away.score + action.payload.score;
        }
      }
    }
  }
});

export const { addTicket, deleteTicket, updateSuccess, changeScore } = ticketsSlice.actions;
export default ticketsSlice.reducer;
