import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
  <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutText}</Link>
              </li>
              
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}

            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn" style={{backgroundColor: "#290010", border:"2px solid white"}} onClick={props.changeColortoPurple}>Purple</button>
              <button type="button" className="btn" style={{backgroundColor: "#003014", border:"2px solid white"}} onClick={props.changeColortoGreen}>Green</button>
              <button type="button" className="btn" style={{backgroundColor: "#444444", border:"2px solid white"}} onClick={props.changeColortoGrey}>Grey</button>
            </div>
            <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
              <input className="form-check-input" onClick={props.toggleMode} onChange={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault" checked={props.mode === "dark"}/>
              <label className="form-check-label" htmlFor="switchCheckDefault">Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,  //needs to be sent always 
  aboutText: PropTypes.string
};

Navbar.defaultProps={
title: "Set title here",
  aboutText: "About text here"
};