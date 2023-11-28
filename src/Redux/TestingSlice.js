import { createSlice } from "@reduxjs/toolkit";

let x = { Counter: 0, Name: "" };

 let CounterSlice = createSlice({
  name: "counterSlice",
  initialState: x,

  reducers: {
    increment: function (state) {
      state.Counter = state.Counter + 1;
      console.log("incrementING counter");
    },

    decrement: function (state) {
      state.Counter = state.Counter - 1;
      console.log("decrementING counter");
    },
  },
});

export let CounterReducer = CounterSlice.reducer;

export let {increment,decrement} = CounterSlice.actions;
