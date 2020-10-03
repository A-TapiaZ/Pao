import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
 
    <nav className="navbar navbar-expand-md navbar-light header fixed-top">
      <Link className="navbar-brand" to="/">EcoNutric</Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          
          <li className="nav-item">
            <NavLink 
              activeClassName="active"
              className="nav-link" 
              exact
              to="/">
              Home 
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink 
              activeClassName="active"
              className="nav-link" 
              exact
              to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              activeClassName="active"
              className="nav-link" 
              exact
              to="/pedidos">
              Pricing
            </NavLink>
          </li>
         
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
