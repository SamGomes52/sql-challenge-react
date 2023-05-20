import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

const NavContainer = styled.nav`
  background-color: rgb(27, 94, 83);
`

const LogoContainer = styled.a`
  font-family: 'Caveat', cursive;
  font-size: xx-large;
`

const niveis = [1, 2, 3, 4, 5];

function Menu() {
  return (
    <NavContainer className="navbar navbar-expand-md navbar-light bg-gradient">
      <div className="container">
        <LogoContainer className="navbar-brand text-white" href="/#">
          SQL Challenge
        </LogoContainer>
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
    </NavContainer>
  );
}

export default Menu;
