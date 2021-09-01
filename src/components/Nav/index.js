import React from 'react';

function Nav(props) {
      return(
            <header>
            <nav className="navbar navbar-nav navbar-expand-md navbar-expand-lg navbar-light text-center" >
            <div className="container-fluid justify-content-center text-center">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" data-parent="#selector" id="navbarToggler">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                   
                <li><a href="/About">About Me</a></li>
              <li><a href="/Projects">My Projects</a></li>
              <li>  <a href="/Contact">Contact Me</a></li>
              <li>  <a href="/Resume">Resume</a></li>
        </ul></div></div>
            </nav>
            </header>
      )
    };
    
    export default Nav;