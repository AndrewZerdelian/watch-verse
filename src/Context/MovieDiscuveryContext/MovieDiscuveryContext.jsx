import axios from 'axios'
import React, { createContext } from 'react'




export const MovieDiscuveryCont = createContext()
export default function MovieDiscuveryContext({children}) {


//const DiscoverMoviesAPI = "https://api.themoviedb.org/3/discover/movie?api_key=2d7b24dfe90cb92bab2f42026ddf8da7&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"


async function MovieDiscuveryCarouselGetAPI(){
        try {
            const {data} = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=2d7b24dfe90cb92bab2f42026ddf8da7&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc")
            //console.log(data.results);
            return data;
        } catch (error) {
            console.log(error);
        }
    }

return (

    <MovieDiscuveryCont.Provider value={{MovieDiscuveryCarouselGetAPI,}}>
    {children}
    </MovieDiscuveryCont.Provider>
)
}
