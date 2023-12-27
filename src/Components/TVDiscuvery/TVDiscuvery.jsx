import React, { useContext, useEffect } from "react";
import { TVDiscuveryCont } from "../../Context/TVDiscuveryContext/TVDiscuveryContext";
import Slider from "react-slick";
import Module from "./TVDiscuvery.module.css";
import testphoto from "../../Assets/1.jpeg";
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
      <div>
        <h2 className="fw-bold text-white opacity-100 "> TV Shows </h2>

        <Slider {...settings}>
          {TVMapping.map((item) => (
            <div key={item.id}>
              <div className={`${Module.container}`}>
                <div className={`${Module.Image}`}>
                  <img
                    src={ImagesBasicPath + item.backdrop_path}
                    alt="background"
                    className={`w-100 `}
                  />
                </div>
              </div>
              <h3 className={`${Module.FontColor} `}>
                {item.name.split(" ").slice(0, 3).join(" ")}
              </h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
