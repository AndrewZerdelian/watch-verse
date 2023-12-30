import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const APIKEY = process.env.REACT_APP_API_KEY;

//if (localStorage.getItem("account_id")){

//}
export const MoviesFavouritesAPI = createAsyncThunk(
  "FavouritesSlice/DeleteFavourites",
  async function (page) {
    const AccountID = localStorage.getItem("account_id");
    const SessionID = localStorage.getItem("session_id");
    console.log("FROM SLICE: " + SessionID);
    console.log("FROM SLICE: " + AccountID);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/account/${AccountID}/favorite/movies?&session_id=${SessionID}&${APIKEY}&${page}`
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

let FavouritesSlice = createSlice({
  name: "FavouritesSlice",
  initialState: {
    APIDATA: [],
  },

  extraReducers: function (builder) {
    builder.addCase(
      MoviesFavouritesAPI.fulfilled,
      function (PrevState, Action) {
        PrevState.APIDATA = Action.payload;
        console.log(Action.payload);
      }
    );
  },
});

export const FavouritesSliceReduser = FavouritesSlice.reducer;
