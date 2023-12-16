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
import CommingSoonDetails from "./Components/CommingSoon/CommingSoonDetails/CommingSoonDetails";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
import CoomingSoonQueryApiContextProvider from "./ReactQuery/CoomingSoonQueryApi";

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
        { path: "BoxOfficeDetails/:ID", element: <BoxOfficeDetails /> },
        { path: "TopSeries", element: <TopSeries /> },
        { path: "TopSeriesDetails/:ID", element: <TopSeriesDetails /> },
        { path: "CommingSoon", element: <CommingSoon /> },
        { path: "CommingSoonDetails/:ID", element: <CommingSoonDetails /> },
        { path: "Favourites", element: <Favourites /> },
        { path: "Login", element: <Login /> },
        { path: "Registration", element: <Registration /> },
      ],
    },
  ]);

  return (
    <div>
      <QueryClientProvider client={Query}>
        <Provider store={myStore}>
          <TVDiscuveryContextProvider>
            <MovieDiscuveryContext>
              <CoomingSoonQueryApiContextProvider>
              <RouterProvider router={routers}></RouterProvider>
              </CoomingSoonQueryApiContextProvider>
            </MovieDiscuveryContext>
          </TVDiscuveryContextProvider>
        </Provider>
      </QueryClientProvider>
    </div>
  );
}
