import React, { useContext, useEffect } from "react";
import { TVDiscuveryCont } from "../../Context/TVDiscuveryContext/TVDiscuveryContext";
import Slider from "react-slick";
import Module from "./TVDiscuvery.module.css";

export default function TVDiscuvery() {
  const { TVDiscuveryGETAPI, TVMapping, setTVMapping } =
    useContext(TVDiscuveryCont);
  const ImagesBasicPath = "https://image.tmdb.org/t/p//original/";
  ///////////////////////////////SETTING API  ///////////////////////
  async function GetTVDiscuvery() {
    const response = await TVDiscuveryGETAPI();
    setTVMapping(response);
    //console.log(response);
  }

  useEffect(() => {
    GetTVDiscuvery();
  }, []);

  //////////////////////////////CAROUSEL /////////////////////////////
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    arrows: false,
  };

  return (
    <div>
      <h2 className="fw-bold text-white opacity-100 "> TV Shows </h2>
      <Slider {...settings}>
        {TVMapping.map((item) => (
          <div key={item.id} className={`${Module.Scalling}`}>
            <img
              src={ImagesBasicPath + item.backdrop_path}
              alt="background"
              className={`w-100 px-5  rounded-5 pt-5`}
            />
            <h3 className={`${Module.FontColor} pb-5 `}>
              {item.name.split(" ").slice(0, 3).join(" ")}
            </h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}
