import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const APIKEY = process.env.REACT_APP_API_KEY;
const AccountID = localStorage.getItem("account_id");
const SessionID = localStorage.getItem("session_id");
//console.log(SessionID);

export const AddToFavouritesPostAPI = createAsyncThunk(
  "AddToFavouriteFunc/AddToFavourites",
  async function (media_id) {
    try {
      const response = await axios.post(
        `https://api.themoviedb.org/3/account/${AccountID}/favorite?&session_id=${SessionID}&${APIKEY}&`,

        { media_type: "movie", media_id, favorite: true }
      );
      //https://api.themoviedb.org/3/account/{account_id}/favorite/
      console.log(response);
      return response?.data;
    } catch (error) {
      console.log(error);
    }
  }
);

let AddToFavouriteFunc = createSlice({
  name: "AddToFavouriteFunc",
  initialState: {
    Favourites: [],
  },

  extraReducers: function (builder) {
    builder.addCase(
      AddToFavouritesPostAPI.fulfilled,
      function (PrevState, Action) {
        PrevState.Favourites = Action.payload;
        console.log(Action.payload);
      }
    );
  },
});

export const AddToFavouritesSliceReduer = AddToFavouriteFunc.reducer;

/**
 * export const AddToFavouritesPostAPI = createAsyncThunk(
  "AddToFavouriteFunc/AddToFavourites",
  async (mediaId, { rejectWithValue }) => {
    try {
      const options = {
        method: "POST",
        url: `https://api.themoviedb.org/3/account/${AccountID}/favorite?&session_id=${SessionID}&${APIKEY}&`,
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          Authorization: "Bearer YOUR_ACCESS_TOKEN",
        },
        data: { media_type: "movie", media_id: mediaId, favorite: true },
      };

      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
 
 */
