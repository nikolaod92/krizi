import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Ticket } from "../types";

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
    }
  }
});

export const { addTicket, deleteTicket } = ticketsSlice.actions;
export default ticketsSlice.reducer;
