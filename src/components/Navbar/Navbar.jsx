import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";

import "./NavbarStyles.css";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const [menuIsShowed, setMenuIsShowed] = useState(false);
  const changeColor = () => {
    setColor(window.scrollY >= 100);
  };

  window.addEventListener("scroll",changeColor);

  return (
    <div className={color ?  "header header-bg":"header"}>
      <Link to="/">
        <h1>Portfolio.</h1>
      </Link>
      <ul className={menuIsShowed ? "nav-menu active" : "nav-menu"}>
        <li onClick={() => setMenuIsShowed((currentValue) => !currentValue)}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={() => setMenuIsShowed((currentValue) => !currentValue)}>
          <Link to="/projects">Project</Link>
        </li>
        <li onClick={() => setMenuIsShowed((currentValue) => !currentValue)}>
          <Link to="/about">About</Link>
        </li>
        <li onClick={() => setMenuIsShowed((currentValue) => !currentValue)}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div
        className="hamburger"
        onClick={() => setMenuIsShowed((currentValue) => !currentValue)}
      >
        {menuIsShowed ? (
          <FaBars size={20} style={{ color: "white" }} />
        ) : (
          <FaTimes size={20} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
