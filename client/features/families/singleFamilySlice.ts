import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Family } from "../../interfaces";
export const fetchSingleFamily = createAsyncThunk(
  "families/fetchOne",
  async (familyId: string) => {
    try {
      console.log(familyId);
      const { data } = await axios.get(`/api/family/${familyId}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const singleFamilySlice = createSlice({
  name: "family",
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleFamily.fulfilled, (state, action) => {
      return action.payload;
    });
  },
  reducers: {},
});

export default singleFamilySlice.reducer;
