import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const APIKEY = process.env.REACT_APP_API_KEY;

// Define a thunk to fetch account_id and session_id from localStorage
const getAccountAndSessionIds = () => {
  const AccountID = localStorage.getItem("account_id");
  const SessionID = localStorage.getItem("session_id");
  return { AccountID, SessionID };
};

// Define the thunk to add to favorites
export const AddToFavouritesPostAPI = createAsyncThunk(
  "AddToFavouriteFunc/AddToFavourites",
  async function ({ media_id, media_type, favorite }) {
    try {
      // Use the thunk to get the current account_id and session_id
      const { AccountID, SessionID } = getAccountAndSessionIds();
      if (SessionID === null) {
        console.log("Please Login");
      }
      const response = await axios.post(
        `https://api.themoviedb.org/3/account/${AccountID}/favorite?&session_id=${SessionID}&${APIKEY}&`,
        { media_type, media_id, favorite }
      );
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

/**ORIGINAL CODE 
 * import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const APIKEY = process.env.REACT_APP_API_KEY;
const AccountID = localStorage.getItem("account_id");
const SessionID = localStorage.getItem("session_id");
//console.log(SessionID);
//this function can add and delete from favourites now,
//by sending true or false in favourites from components buttons,
export const AddToFavouritesPostAPI = createAsyncThunk(
  "AddToFavouriteFunc/AddToFavourites",
  async function ({ media_id, media_type, favorite }) {
    try {
      const response = await axios.post(
        `https://api.themoviedb.org/3/account/${AccountID}/favorite?&session_id=${SessionID}&${APIKEY}&`,
        { media_type, media_id, favorite }
      );
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


 */

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
