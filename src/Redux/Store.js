import { configureStore } from "@reduxjs/toolkit";
import { CounterReducer } from "./TestingSlice";

export let myStore = configureStore({
  reducer: {
    Counter:CounterReducer,
  },
});
