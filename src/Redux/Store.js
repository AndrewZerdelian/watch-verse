import { configureStore } from "@reduxjs/toolkit";
import { CounterReducer } from "./TestingSlice";
import { BoxOfficeSliceReduser } from "./BoxOfficeSlice";


export let myStore = configureStore({
  reducer: {
    Counter:CounterReducer,
    BOfficeAPI:BoxOfficeSliceReduser,
  },
});
