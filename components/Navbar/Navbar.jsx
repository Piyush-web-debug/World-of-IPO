// src/components/Navbar/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.jsx'; // Import your Navbar styles

function Navbar() {
  return (
    <nav className="navbar1">
      <ul>
        <li><Link to="/IPO">IPO</Link></li>
        <li><Link to="/Buyback1">Buyback1</Link></li>
        <li><Link to="/Buyback2">Buyback2</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;