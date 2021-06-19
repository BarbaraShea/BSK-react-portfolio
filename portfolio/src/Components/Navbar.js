import React from 'react';
import { Link } from 'react-router-dom';

function Navbar (){
    return(
<nav class="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"var(--sand)"}}>
  <Link to="/">
  <a class="navbar-brand" to="/">BSK</a>
  </Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li>
         <Link className="text-dark" to="/">
          <h1 class="nav-link" style={{ fontSize: '1rem', fontFamily:"Quicksand", margin:"0px, 0px, 0px", color:"var(--charcoal)"}}>About Me</h1>
        </Link>
      </li>
      <li>
        <Link className="text-dark" to="/Project">
          <h1 class="nav-link" style={{ fontSize: '1rem', fontFamily:"Quicksand", color:"var(--charcoal)"}}>Projects</h1>
        </Link>
      </li>
      <li>
         <Link className="text-dark" to="/Resume">
          <h1 class="nav-link" style={{ fontSize: '1rem', fontFamily:"Quicksand", margin:"0px, 0px, 0px", color:"var(--charcoal)"}}>Resume</h1>
        </Link>
      </li>
       <li>
        <Link className="text-dark" to="/Contact">
          <h1 class="nav-link" style={{ fontSize: '1rem', fontFamily:"Quicksand", color:"var(--charcoal)"}}>Contact</h1>
        </Link>
      </li>
    </ul>
  </div>
</nav>

    )
};

export default Navbar;
