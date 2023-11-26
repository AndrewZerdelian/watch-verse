import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../Redux/TestingSlice";


export default function Footer() {
  
let {Counter} = useSelector((state)=> state.Counter)
  let dispatch = useDispatch()
  return <footer> 
 <div className="text-danger"> THE COUNT IS {Counter}
 
 <button className="btn bg-info "onClick={()=>dispatch(increment()) }>increment</button></div>
<div className="card bg-black text-white">
  <h5 className="card-header">Featured</h5>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>


  </footer>;
}


