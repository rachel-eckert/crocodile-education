import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Family } from "../../interfaces";
export const fetchSingleFamily = createAsyncThunk(
  "families/fetchOne",
  async (id: string) => {
    try {
      const { data } = await axios.get(`/api/family/${id}`);
      console.log("look at id" + id + data);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);
let initialState: Family | Family[] = [];
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
