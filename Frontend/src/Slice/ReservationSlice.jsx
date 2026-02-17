import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API endpoint
const API_URL = `${import.meta.env.VITE_API_URL}/api/v1/reservation/all`;

// Thunk: Fetch all reservations
export const fetchReservations = createAsyncThunk(
  "reservations/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(API_URL);
      return response.data; // success + data + count
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || "Server Error");
    }
  }
);

const ReservationSlice = createSlice({
  name: "reservations",
  initialState: {
    loading: false,
    reservations: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      // loading
      .addCase(fetchReservations.pending, (state) => {
        state.loading = true;
      })

      // success
      .addCase(fetchReservations.fulfilled, (state, action) => {
        state.loading = false;
        state.reservations = action.payload.data; // array from backend
      })

      // error
      .addCase(fetchReservations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default ReservationSlice.reducer;
