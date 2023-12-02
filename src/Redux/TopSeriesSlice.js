import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
///////////////////First Phase CreateAsyncThunk API FUNCTION  //////////////////////////
export const TopSeriesAPIFUNC = createAsyncThunk(
  "TopSeriesInitialState/GetTopSeries",
  async function () {
    const response = await axios.get(
      "https://api.themoviedb.org/3/tv/top_rated?api_key=2d7b24dfe90cb92bab2f42026ddf8da7&include_adult=false&language=en-US&page=1"
    );
    console.log(response);
    return response;
  }
);



//////////////////////Second Phase =>(Create Slice)<= AKA InitialState with the same name as above  //////////////////////////


const TopSeriesSlice = createSlice({
    name: "TopSeriesInitialState",
    initialState:{
        APIDATA:[],
        isLoading: false,
    },



    /// Third Phase =>(ExtraReducers)<= for Login Handling  ///////
/// with 3 condetions to handle =>(Fulfilled , rejected ,Pending)////

    extraReducers:function(builder) {
        builder.addCase(TopSeriesAPIFUNC.pending,
            function(PrevState,Action){
                PrevState.isLoading= true;
                console.log('Pending');
            });

        builder.addCase(TopSeriesAPIFUNC.fulfilled,
            function(prevstate,Action){
                prevstate.APIDATA= Action.payload
                console.log('API FETCHED');
            })
    }
})


export const TopSeriresReducer = TopSeriesSlice.reducer;