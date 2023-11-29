import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BoxOfficeAPIFunction } from '../../Redux/BoxOfficeSlice'


export default function BoxOffice() {

  const Dispatch = useDispatch()

 const {allData} = useSelector((store)=> store.BOfficeAPI)

  console.log(allData);
  useEffect(()=> {
    Dispatch(BoxOfficeAPIFunction())
  },[])
  return (

    <><h1 className='text-center p-5'>BoxOffice </h1></>
  )
}
