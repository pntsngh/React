import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Contact Manager</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/add-contact">Add Contact</Link>
        <Link to="/contacts">Contact List</Link>
      </div>
    </nav>
  );
}

export default Navbar;