import React from "react";

export default function Footer() {
  return (
    <footer className="pt-5">
      <div className="card text-white bg-black">
        <h5 className="card-header pb-4">Featured</h5>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="/" className="btn btn-outline-danger">
            Go somewhere
          </a>
        </div>
      </div>
    </footer>
  );
}
