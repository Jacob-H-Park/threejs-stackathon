import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/three">
          <div>Three</div>
        </Link>
        <Link to="/galaxy">
          <div>Galaxy</div>
        </Link>
        <Link to="/3D-text">
          <div>3D Text</div>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
