import React from "react";
import Layout from "./Components/Layout/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import BoxOffice from "./Components/BoxOffice/BoxOffice";
import CommingSoon from "./Components/CommingSoon/CommingSoon";

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
      ],
    },
  ]);

  return (
    <div >
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}
