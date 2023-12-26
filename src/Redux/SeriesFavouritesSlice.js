import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const APIKEY = process.env.REACT_APP_API_KEY;
const AccountID = localStorage.getItem("account_id");
const SessionID = localStorage.getItem("session_id");
//console.log(SessionID);
export const SeriesFavouritesAPI = createAsyncThunk(
  "SeriesFavouritesSlice/DeleteFavourites",
  async function (page) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/account/${AccountID}/favorite/tv?&session_id=${SessionID}&${APIKEY}&${page}`
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

let SeriesFavouritesSlice = createSlice({
  name: "SeriesFavouritesSlice",
  initialState: {
    APIDATA: [],
  },

  extraReducers: function (builder) {
    builder.addCase(
      SeriesFavouritesAPI.fulfilled,
      function (PrevState, Action) {
        PrevState.APIDATA = Action.payload;
        console.log(Action.payload);
      }
    );
  },
});

export const SeriesFavouritesSliceReduser = SeriesFavouritesSlice.reducer;
