import React from "react";
import Layout from "./Components/Layout/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import BoxOffice from "./Components/BoxOffice/BoxOffice";
import CommingSoon from "./Components/CommingSoon/CommingSoon";
import Favourites from "./Components/Favourites/Favourites";
import MovieDiscuveryContext from "./Context/MovieDiscuveryContext/MovieDiscuveryContext";
import TVDiscuveryContextProvider from "./Context/TVDiscuveryContext/TVDiscuveryContext";
import { Provider } from "react-redux";
import { myStore } from "./Redux/Store";
import TopSeries from "./Components/TopSeries/TopSeries";
import BoxOfficeDetails from "./Components/BoxOffice/BoxOfficeDetails/BoxOfficeDetails";
import TopSeriesDetails from "./Components/TopSeries/TopSeriesDetails/TopSeriesDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  let Query = new QueryClient();
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },

        { path: "BoxOffice", element: <BoxOffice /> },
        {path:"BoxOfficeDetails/:ID",element: <BoxOfficeDetails/>},
        {path:"TopSeries",element: <TopSeries/>},
        {path:"TopSeriesDetails/:ID",element: <TopSeriesDetails/>},
        { path: "CommingSoon", element: <CommingSoon /> },
        {path:"Favourites",element: <Favourites/>},
      ],
    },
  ]);

  return (
    <div >
    <QueryClientProvider client={Query}>
    <Provider store={myStore}>
    <TVDiscuveryContextProvider>
    <MovieDiscuveryContext>
      <RouterProvider router={routers}></RouterProvider>
      </MovieDiscuveryContext>
      </TVDiscuveryContextProvider>
      </Provider>
      </QueryClientProvider>
    </div>
  );
}
