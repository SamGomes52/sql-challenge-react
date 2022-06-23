import React from "react";
import {Link} from 'react-router-dom';

function Menu() {
  return (
    <nav className="navbar navbar-expand-md navbar-light verde bg-gradient">
      <div className="container">
        <a className="navbar-brand text-white fonte-titulo" href="/#">
          SQL Challenge
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Nível 1
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/nivel2">
                Nível 2
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/nivel3">
                Nível 3
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/nivel4">
                Nível 4
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/nivel5">
                Nível 5
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
