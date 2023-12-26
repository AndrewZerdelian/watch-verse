import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const APIKEY = process.env.REACT_APP_API_KEY;
export const TopSeriesDetailsAPIFunc = createAsyncThunk(
  "TopSeriesDetails, TopSeriesDetailsAPI",
  async function (ID) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${ID}?${APIKEY}&language=en-US`
    );
    console.log(response);
    return response?.data;
  }
);

const TopSeriesDetailsSlice = createSlice({
  name: "TopSeriesDetails",
  initialState: {
    APIDATA: [],
    isLoading: true,
  },

  extraReducers: function (builders) {
    builders.addCase(TopSeriesDetailsAPIFunc.pending, function (prevstate) {
      prevstate.isLoading = true;
    });

    builders.addCase(
      TopSeriesDetailsAPIFunc.fulfilled,
      function (prevstate, Action) {
        prevstate.isLoading = false;
        prevstate.APIDATA = Action.payload;
      }
    );
  },
});

export const TopSeriesDetailsReduser = TopSeriesDetailsSlice.reducer;
