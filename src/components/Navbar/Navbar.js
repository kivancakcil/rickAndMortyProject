import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import '/home/kivanc/Masaüstü/rick_and_morty_project/src/App.css'


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4">
      <div className="container">
        <Link to="/" className="fs-3 ubuntu navbar-brand">
          <span className="text-info">Rick & Morty</span> Universe
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <style jsx>
            {`
          button[aria-expanded="false"] > .close{
            display: none;
          }

          button[aria-expanded="true"] > .open{
            display: none;
          }
          `}
          </style>
          <i class="fas fa-bars open fw-bold text-dark"></i>
          <i class="fas fa-times close fw-bold text-dark"></i>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav fs-5">
            <NavLink activeClassName="active" to="/" className="nav-link">Characters</NavLink>
            <NavLink to="/episodes" className="nav-link">Episodes</NavLink>
            <NavLink to="/location" className="nav-link" >Location</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar