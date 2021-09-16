import React from "react";

import {Link, NavLink} from 'react-router-dom'
import CartWidget from "../Cart/cartWidget";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to='/' className="navbar-brand" >
        Vinoteca Olmos
      </Link>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink exact to='/' activeClassName="active pepe" className="nav-item nav-link" >
            Nosotros
          </NavLink>
          <NavLink to={`/productos`} activeClassName="active" className="nav-item nav-link" >
            Productos
          </NavLink>
          <NavLink to={`/contactos`} activeClassName="active" className="nav-item nav-link" >
            Contactanos
          </NavLink>
        </div>
      </div>
      <CartWidget/>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </nav>
  );
};