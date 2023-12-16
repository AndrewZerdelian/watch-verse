import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// name of the slice then the discription then the api function,
//can it hold try and catch methods...?
export const BoxOfficeAPIFunction = createAsyncThunk(
  "BoxOfficeSlice/GETBoxOFFICEAPI",
  async function (page) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=2d7b24dfe90cb92bab2f42026ddf8da7&include_adult=false&include_video=true&language=en-US&page=${page}`
    );

    console.log(response);
    return response;
  }
);

let BoxOfficeSlice = createSlice({
  name: "BoxOfficeSlice",
  initialState: {
    allData: [],
    isLoading: true,
    isError: false,

  },

  // will handle all states of the api such data , error, isloading
  // standerd parametar name is builder

  extraReducers: function (builder) {
    // success , failed , loading
    // Fulfilled ,rejected ,pending <== original names
    // standerd syntax

    /**
     * builder.addcase (name of the api function from the createAsyncThunk
     *  ..then the case if itsfulfilled or failed , loading as example then we add a coma, and the function that will happend when it meets the requirements   )
     */

    // these functions will take in the parametars the inisial state AKA Prevstate and the Action AKA Reducers,

    builder.addCase(
      BoxOfficeAPIFunction.fulfilled,
      function (PrevState, Action) {
        PrevState.isLoading = false;
        PrevState.isError = false;

       // console.log("inside the function ", Action);

        PrevState.allData = Action.payload.data;
        console.log(PrevState.allData);
      }
    );

    builder.addCase(BoxOfficeAPIFunction.pending, function () {
      //console.log(" DATA IS PENDING ");
    });

    builder.addCase(BoxOfficeAPIFunction.rejected, function () {
      console.log("DATA REJECTED");
    });
  },
});

export const BoxOfficeSliceReduser = BoxOfficeSlice.reducer;
