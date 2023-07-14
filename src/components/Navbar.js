import React from 'react';
import PropTypes from 'prop-types';
import App from '../App';
import {Link} from 'react-router-dom';
export default function Navbar(props) {
  return (
    // <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
    <nav className={`navbar navbar-expand-lg navbar-light bg-light`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li> */}
          </ul>
          <div className="btn-group mx-4" role="group" aria-label="Basic mixed styles example">
  <button type="button" onClick={() => props.toggleMode("#343a40","white","dark")} style={{backgroundColor:'black',color:'white'}} className="btn">black</button>
  <button type="button" onClick={() => props.toggleMode("grey","white","grey")} style={{backgroundColor:'grey',color:'white'}} className="btn">grey</button>
  <button type="button" onClick={() => props.toggleMode("white","black","light")} style={{backgroundColor:'white',color:'black'}} className="btn">white</button>
  <button type="button" style={{backgroundColor:'blue',color:'white'}} className="btn">blue</button>
</div>
          {/* <form className="d-flex" role="search"> */}
          {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light  '}`}>
              <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Dark Mode</label>
          </div> */}
            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title:"Set TItle Here"
}
