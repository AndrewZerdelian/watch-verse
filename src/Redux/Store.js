import { configureStore } from "@reduxjs/toolkit";
import { CounterReducer } from "./TestingSlice";
import { BoxOfficeSliceReduser } from "./BoxOfficeSlice";
import { TopSeriresReducer } from "./TopSeriesSlice";
import { BOXOFFICEDETAILSREDUX } from "./BoxOfficeDetailsSlice";


export let myStore = configureStore({
  reducer: {
    Counter:CounterReducer,
    BOfficeAPI:BoxOfficeSliceReduser,
    TopSeries:TopSeriresReducer,
    BODetails:BOXOFFICEDETAILSREDUX,
  },
});
