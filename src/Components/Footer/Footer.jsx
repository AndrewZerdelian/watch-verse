import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="card text-white bg-dark">
        <h5 className="card-header">Featured</h5>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </footer>
  );
}

/**
 * import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../Redux/TestingSlice";

 * let {Counter} = useSelector((state)=> state.Counter)
  let dispatch = useDispatch()

  <div className="text-danger"> THE COUNT IS {Counter}
 
 <button className="btn bg-info "onClick={()=>dispatch(increment()) }>increment</button></div>

  
 */
