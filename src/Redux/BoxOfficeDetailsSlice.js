import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const BoxOfficeDetailsAPIFUNC = createAsyncThunk(
  "BODETAILS/GETBoxOfficeDetails",
  async function (ID) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${ID}?api_key=2d7b24dfe90cb92bab2f42026ddf8da7&language=en-US`
    );
    //console.log(response);
    return response;
  }
);

const BoxOfficeDetailsSlice = createSlice({
  name: "BODETAILS",
  initialState: {
    APIDATA: [],
    isLoading: true,
  },

  extraReducers: function (builder) {
    builder.addCase(
      BoxOfficeDetailsAPIFUNC.pending,
      function (prevstate, Action) {
        prevstate.isLoading = true;
      }
    );

    builder.addCase(
      BoxOfficeDetailsAPIFUNC.fulfilled,
      function (prevstate, Action) {
        prevstate.isLoading = false;
        prevstate.APIDATA = Action.payload.data;
        //console.log(Action.payload.data);
      }
    );
  },
});

export const BOXOFFICEDETAILSREDUX = BoxOfficeDetailsSlice.reducer;
