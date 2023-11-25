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

export default function App() {
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
        { path: "CommingSoon", element: <CommingSoon /> },
        {path:"Favourites",element: <Favourites/>}
      ],
    },
  ]);

  return (
    <div >
    <Provider store={myStore}>
    <TVDiscuveryContextProvider>
    <MovieDiscuveryContext>
      <RouterProvider router={routers}></RouterProvider>
      </MovieDiscuveryContext>
      </TVDiscuveryContextProvider>
      </Provider>
    </div>
  );
}
