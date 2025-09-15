import React from "react";
import logo from "../assets/Logo.png"; // Adjust path correctly

export default function Header() {
  return (
    <>
    <nav id="page1" className="navbar navbar-expand-lg">
      <a id="header1" className="navbar-brand fw-bold" href="#">
        <img src={logo} className="img-fluid" alt="Icon" /> World of IPO
      </a>

      {/* Mobile toggle */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navmenu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navmenu">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <a className="nav-link fw-bold active" href="http://localhost:3000/">
              Home
            </a>
          </li>

          {/* IPO Dropdown */}
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle fw-bold"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              IPO
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="http://localhost:3000/IPO">Current IPO</a></li>
              <li><a className="dropdown-item" href="http://localhost:3000/UpcomingIPO">Upcoming IPO</a></li>
              <li><a className="dropdown-item" href="#">Listed IPO</a></li>
              <li><a className="dropdown-item" href="#">Current SME IPO</a></li>
              <li><a className="dropdown-item" href="#">Upcoming SME IPO</a></li>
              <li><a className="dropdown-item" href="#">Listed SME IPO</a></li>
            </ul>
          </li>

          <li className="nav-item">
            <a className="nav-link fw-bold" href="#">Buyback</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-bold" href="#">GMP Tracker</a>
          </li>

          {/* Resources Dropdown */}
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle fw-bold"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              Resources
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="http://localhost:3000/IPO">Current IPO</a></li>
              <li><a className="dropdown-item" href="http://localhost:3000/UpcomingIPO">Upcoming IPO</a></li>
              <li><a className="dropdown-item" href="#">Listed IPO</a></li>
              <li><a className="dropdown-item" href="#">Current SME IPO</a></li>
              <li><a className="dropdown-item" href="#">Upcoming SME IPO</a></li>
              <li><a className="dropdown-item" href="#">Listed SME IPO</a></li>
            </ul>
          </li>

          <li className="nav-item">
            <a className="nav-link fw-bold" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
}
