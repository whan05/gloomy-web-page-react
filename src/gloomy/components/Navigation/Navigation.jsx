import React, { useState } from "react";
import { logo } from "../../../assets/images";
import { NavLink } from "react-router-dom";
import { MenuModal } from "../";

import "./Navigation.css";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navigation">
      <div className="logo-section">
        <NavLink className="logo-btn" to="/home">
          <img className="logo" src={logo} alt="logo" />
          <p className="logo-text">Gloomy Studios</p>
        </NavLink>
      </div>
      <nav className="horizotal-menu">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to="/websites"
        >
          WebSites
        </NavLink>
        <NavLink
           className={({ isActive }) => (isActive ? "active" : undefined)}
          to="/design">
          Design
        </NavLink>
        <NavLink 
           className={({ isActive }) => (isActive ? "active" : undefined)}
          to="/our-work">
          Our Work
        </NavLink>
      </nav>
      <button onClick={() => setIsOpen(true)} className="menu-btn">
        <i className="bx bx-menu"></i>
      </button>
      <MenuModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};
