import Slider from "react-slick";

import FirstImage from "../../Assets/1.jpeg";
import FirstImage2 from "../../Assets/2.jpg";
import FirstImage3 from "../../Assets/3.jpg";
import { useContext, useEffect, useState } from "react";
import { MovieDiscuveryCont } from "../../Context/MovieDiscuveryContext/MovieDiscuveryContext";
import axios from "axios";
export default function MovieDiscuvery() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    fade: true,
    appendDots: (dots) => <ul style={{ margin: "0px" }}>{dots}</ul>,
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          color: "black",
        }}
      ></div>
    ),
  };

  //////////////////////////////API FOR CAURSEL /////////////////////////
  const { MovieDiscuveryCarouselGetAPI } = useContext(MovieDiscuveryCont);
  const [MappingMovieDiscuveryContext, setMappingMovieDiscuveryContext] =
    useState([]);

  async function GetDiscvuverMovies() {
    const response = await MovieDiscuveryCarouselGetAPI();
    //setMappingMovieDiscuveryContext(response);
    //console.log(response.results);
  }

  useEffect(() => {
    GetDiscvuverMovies();
  }, []);

  ////////////////////////////////test for movie images //////////////////////////////////
  async function CoverImages() {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/872585/images"
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    CoverImages();
  }, []);

  /**
  *  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/872585/images",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDdiMjRkZmU5MGNiOTJiYWIyZjQyMDI2ZGRmOGRhNyIsInN1YiI6IjY0YzY0NTU1Y2FkYjZiMDBhYzY2MGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qQtJ_EechHLDtkmDGhavEXqInLrEpa57XMwUVmQLwok",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  */

  ///////////////////////////////TO BE TESTED TOMORROW WITH THE API
  //need to make it with async function try and catch and axios .get method

  return (
    <Slider {...settings} className="w-100">
      <div>
        <img src={FirstImage} alt="background" />
      </div>
      <div>
        <img src={FirstImage2} alt="background" />
      </div>
      <div>
        <img src={FirstImage3} alt="background" />
      </div>
    </Slider>
  );
}
