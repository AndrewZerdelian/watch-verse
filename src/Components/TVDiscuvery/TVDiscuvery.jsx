import React from "react";

export default function TVDiscuvery() {
  return <div>TVDiscuvery</div>;
}

/**
 * import React from "react";
import { useContext } from "react";

import Slider from "react-slick";

export default function TVDiscuvery() {
  const { TVDiscuveryGETAPI, TVMapping, setTVMapping, ImagesBasicPath } =
    useContext(TVDiscuvery);

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
      }

      
  async function TVSHOWSAPI() {
    const response = await TVDiscuveryGETAPI();
    setTVMapping(response.results);
    console.log(response.results);
  }

  return <div></div>;
}



 */
