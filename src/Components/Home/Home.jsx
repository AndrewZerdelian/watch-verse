import React from 'react'
import MovieDiscuvery from '../MovieDiscuvery/MovieDiscuvery'
import TVDiscuvery from '../TVDiscuvery/TVDiscuvery'
import SearchBar from '../SearchBar/SearchBar'


export default function Home() {
  return (

    <div className='text-center'>
    <SearchBar/>
    <MovieDiscuvery/>
    <TVDiscuvery/>
    </div>
  )
}
