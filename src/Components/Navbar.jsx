import React from "react";
import logo from '../Assets/logo.png';
export const Navbar = () => {
    return (
        <div style={{position:"relative"}}>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a className="nav-link" href="/#"> Home</a>
               
              
            </li>
            <li class="nav-item">
         
            <a className="nav-link" href="/#">About Us</a>
         
            </li>
            <li class="nav-item">
            <a className="nav-link" href="/#">Services</a>
                </li>
                <li className="nav-item ">
            <a className="nav-link" href="/#">Contact Us</a>
            </li>
            <li className="nav-item ">
            <a className="nav-link" href="/#">Login</a>
            </li>
          </ul>
        </div>
      </div>
        </nav>
            <img
           className="logo-img"     
          src={logo}
          alt="logo"
          width="250"
          height="120"
            />
            </div>
  );
};
