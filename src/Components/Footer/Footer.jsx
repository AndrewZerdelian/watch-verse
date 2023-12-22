import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="card text-white bg-black">
        <h5 className="card-header">Featured</h5>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="/" className="btn btn-danger">
            Go somewhere
          </a>
        </div>
      </div>
    </footer>
  );
}


