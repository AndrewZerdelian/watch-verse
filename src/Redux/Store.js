import { configureStore } from "@reduxjs/toolkit";
import { CounterReducer } from "./TestingSlice";
import { BoxOfficeSliceReduser } from "./BoxOfficeSlice";
import { TopSeriresReducer } from "./TopSeriesSlice";


export let myStore = configureStore({
  reducer: {
    Counter:CounterReducer,
    BOfficeAPI:BoxOfficeSliceReduser,
    TopSeries:TopSeriresReducer,
  },
});
