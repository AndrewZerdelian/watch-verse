import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TopSeriesAPIFUNC } from '../../Redux/TopSeriesSlice';

export default function TopSeries() {
  const ImagesBasicPath = "https://image.tmdb.org/t/p/original/";
  const Dispatch = useDispatch()

const {APIDATA, isLoading} = useSelector((store) => store.TopSeries);

console.log(APIDATA);
console.log(isLoading);

useEffect(()=> {Dispatch(TopSeriesAPIFUNC())},[])


  return (
    <div className='text-white text-center container-fluid'><h1>TopSeries</h1>
    <div></div>
    </div>
  )
}


//{allData.map((Series)=> <div>{}</div>)}