import React from "react";
import { Link } from "react-router-dom";

const niveis = [1, 2, 3, 4, 5];

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
            {niveis.map((nivel, index) => {
              let numNivel = "/nivel" + nivel;
              numNivel = numNivel === "/nivel1" ? "/" : numNivel;
              return (
                <li className="nav-item" key={index}>
                  <Link className="nav-link text-white" to={numNivel}>
                    Nível {nivel}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
