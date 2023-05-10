import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Family } from "../../interfaces";
export const fetchSingleFamily = createAsyncThunk(
  "families/fetchOne",
  async (id: string) => {
    try {
      const { data } = await axios.get(`/api/family/${id}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);
let initialState: any = {};
export const singleFamilySlice = createSlice({
  name: "family",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchSingleFamily.fulfilled, (state, action) => {
      return action.payload;
    });
  },
  reducers: {},
});

export default singleFamilySlice.reducer;
