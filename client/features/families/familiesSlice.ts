import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Family } from "../../interfaces";
export const fetchFamiliesAsync = createAsyncThunk(
  "families/fetchAll",
  async () => {
    try {
      const { data } = await axios.get("/api/family");
      return data;
    } catch (err) {
      console.error(err);
    }
  }
);
// let initialState: Family | Family[] = [];
export const familiesSlice = createSlice({
  name: "families",
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(fetchFamiliesAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
  reducers: {},
});

export default familiesSlice.reducer;
