import React, { useState } from "react";
import { logo } from "../../../assets/images";
import { Link } from "react-router-dom";
import { MenuModal } from "../";

import "./Navigation.css";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navigation">
      <div className="logo-section">
        <Link className="logo-btn" to="/home">
          <img className="logo" src={logo} alt="logo" />
          <p className="logo-text">Gloomy Studio</p>
        </Link>
      </div>
      <nav className="horizotal-menu">
        <Link className="menu-item" to="/websites">
          WebSites
        </Link>
        <Link className="menu-item" to="/design">
          Desing
        </Link>
        <Link className="menu-item" to="/our-work">
          Our Work
        </Link>
      </nav>
      <button onClick={() => setIsOpen(true)} className="menu-btn">
        <i className="bx bx-menu"></i>
      </button>
      <MenuModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};
