import React from "react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="topnav">
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" href="/">
                Home
              </a>
              <a className="nav-link" href="/about">
                About
              </a>
              <a className="nav-link" title="About Park" href="/bespoke">
                Bespoke
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
