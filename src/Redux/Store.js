import { configureStore } from "@reduxjs/toolkit";
import { CounterReducer } from "./TestingSlice";
import { BoxOfficeSliceReduser } from "./BoxOfficeSlice";
import { TopSeriresReducer } from "./TopSeriesSlice";
import { BOXOFFICEDETAILSREDUX } from "./BoxOfficeDetailsSlice";
import { TopSeriesDetailsReduser } from "./TopSeriesDetailsSlice";


export let myStore = configureStore({
  reducer: {
    Counter:CounterReducer,
    BOfficeAPI:BoxOfficeSliceReduser,
    TopSeries:TopSeriresReducer,
    BODetails:BOXOFFICEDETAILSREDUX,
    TSDetails:TopSeriesDetailsReduser
  },
});
