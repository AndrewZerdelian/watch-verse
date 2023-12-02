import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BoxOfficeAPIFunction } from "../../../Redux/BoxOfficeSlice";

//////////////////////////
//Tomorrow will create the details file for BOX OFFICE AND TV SHOW////////////////////

export default function BoxOfficeDetails() {
  const ImagesBasicPath = "https://image.tmdb.org/t/p/original/";
  const Dispatch = useDispatch();

  const { allData, isLoading, isError } = useSelector(
    (store) => store.BOfficeAPI
  );

  console.log(allData);

  useEffect(() => {
    Dispatch(BoxOfficeAPIFunction());
  }, []);

  const { ID } = useParams();
  console.log(ID);

  return (
    <div>
      <h1>BoxOfficeDetails</h1>
    </div>
  );
}
