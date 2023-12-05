import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const TopSeriesDetailsAPIFunc = createAsyncThunk(
  "TopSeriesDetails, TopSeriesDetailsAPI",
  async function (ID) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${ID}?api_key=2d7b24dfe90cb92bab2f42026ddf8da7&language=en-US`
    );
    console.log(response);
    return response;
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
        prevstate.APIDATA = Action.payload.data;
      }
    );
  },
});



export const TopSeriesDetailsReduser = TopSeriesDetailsSlice.reducer;