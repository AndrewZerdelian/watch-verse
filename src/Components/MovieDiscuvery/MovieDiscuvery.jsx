import Slider from "react-slick";
import { useContext, useEffect } from "react";
import { MovieDiscuveryCont } from "../../Context/MovieDiscuveryContext/MovieDiscuveryContext";

export default function MovieDiscuvery() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
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
  const {
    MovieDiscuveryCarouselGetAPI,
    MappingDiscovery,
    setMappingDiscovery,
  } = useContext(MovieDiscuveryCont);

  const ImagesBasicPath = "https://image.tmdb.org/t/p/original/";

  async function GetDiscvuverMovies() {
    const response = await MovieDiscuveryCarouselGetAPI();
    setMappingDiscovery(response.results);

    console.log(response.results);
  }

  useEffect(() => {
    GetDiscvuverMovies();
  }, []);

  return (
    <Slider {...settings} className="w-100">
      {MappingDiscovery.map((item) => (
        <div key={item.id}>
          <img
            src={ImagesBasicPath + item.backdrop_path}
            alt="background"
            className=" h-100 mx-auto rounded-5"
            style={{width: '100%', height: "10%"}}
          />
        </div>
      ))}
    </Slider>
  );
}
/**
 *  <img src={item.ImagesBasicPath
} alt="blabla" />
 */
////////////////////////////////test for movie images //////////////////////////////////
/**
  *  async function CoverImages() {
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

  */
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
