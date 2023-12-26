import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
///////////////////First Phase CreateAsyncThunk API FUNCTION  //////////////////////////
const APIKEY = process.env.REACT_APP_API_KEY;
export const TopSeriesAPIFUNC = createAsyncThunk(
  "TopSeriesInitialState/GetTopSeries",
  async function (Paggination) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?${APIKEY}&include_adult=false&language=en-US&page=${Paggination}`
    );
    console.log(response);
    return response.data;
  }
);
//////////////////////Second Phase =>(Create Slice)<= AKA InitialState with the same name as above  //////////////////////////

const TopSeriesSlice = createSlice({
  name: "TopSeriesInitialState",
  initialState: {
    APIDATA: [],
    isLoading: true,
  },

  /// Third Phase =>(ExtraReducers)<= for Login Handling  ///////
  /// with 3 condetions to handle =>(Fulfilled , rejected ,Pending)////

  extraReducers: function (builder) {
    builder.addCase(TopSeriesAPIFUNC.pending, function (PrevState, Action) {
      PrevState.isLoading = true;
    });

    builder.addCase(TopSeriesAPIFUNC.fulfilled, function (prevstate, Action) {
      prevstate.isLoading = false;
      prevstate.APIDATA = Action.payload;
      console.log(Action.payload);
    });
  },
});

export const TopSeriresReducer = TopSeriesSlice.reducer;
