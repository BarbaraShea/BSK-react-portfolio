import React from 'react';
import { Link } from 'react-router-dom';

function Navbar (){
    return(
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">BSK</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li>
         <Link className="text-dark" to="/">
          <h1 class="nav-link" style={{ fontSize: '1rem', fontFamily:"Quicksand", margin:"0px, 0px, 0px"}}>About Me</h1>
        </Link>
      </li>
      <li>
        <Link className="text-dark" to="/Project">
          <h1 class="nav-link" style={{ fontSize: '1rem', fontFamily:"Quicksand"}}>Projects</h1>
        </Link>
      </li>
       <li>
        <Link className="text-dark" to="/Contact">
          <h1 class="nav-link" style={{ fontSize: '1rem', fontFamily:"Quicksand"}}>Contact</h1>
        </Link>
      </li>
    </ul>
  </div>
</nav>

    )
};

export default Navbar;
