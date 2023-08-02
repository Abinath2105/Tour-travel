import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
function Navbar(){
    
    return(

    <div className="header" >
    <div className="container">

      <div className="overlay"></div>

      
      

      <div className="menu-open-btn button" >
        <ion-icon name="menu-outline"></ion-icon>
      </div>

      <nav className="navbar" data-navbar>

        <button className="menu-close-btn" data-menu-close-btn>
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <a href="#" className="logo">
          <img src="" alt="EduSmart logo"/>
          
        </a>

        <ul className="navbar-list">

          <li>
            <Link to="/Home" className="navbar-link">Home</Link>
           
          </li>

          <li>
            <Link to='/About' className="navbar-link">About</Link>
          </li>

          <li>
          <Link to='/Destination' className="navbar-link">Destination</Link>
          </li>

          <li>
            <Link to="/TourPackage" className="navbar-link">Packages</Link>
          </li>
          <li>
            <Link to="/Trip" className="navbar-link">My Trips</Link>
          </li>
          <li>
            <Link to="/Contact" className="navbar-link">Contact</Link>
          </li>

        </ul>

        <button className="btn btn-secondary">Get Started</button>

      </nav>

    </div>
  </div>

    );
}
export default Navbar;