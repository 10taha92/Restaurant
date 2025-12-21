import { configureStore } from "@reduxjs/toolkit";
import reservationReducer from "../Slice/ReservationSlice";

export const store = configureStore({
  reducer: {
    reservations: reservationReducer,
  },
});