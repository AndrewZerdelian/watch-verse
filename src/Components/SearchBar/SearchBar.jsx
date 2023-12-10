import React from 'react'

export default function SearchBar() {
  
  return (
    <div className='p-5 '>
      <form className="d-flex container" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search for Movies/tvshows"
          aria-label="Search"
        />
        <button className="btn btn-outline-danger" type="submit">
          Search
        </button>
      </form>
    </div>
  )
}
