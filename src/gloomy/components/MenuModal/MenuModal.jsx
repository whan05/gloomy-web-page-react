import { NavLink } from "react-router-dom";
import "./MenuModal.css";

export const MenuModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="menu-overlay">
      <div className="menu-modal">
        <button className="menu-close" onClick={onClose}>
          ✕
        </button>

        <div className="menu-content">
          <nav className="menu-nav">
            <NavLink
              to="/"
              end
              onClick={onClose}
              className={({ isActive }) =>
                isActive ? "active" : undefined
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={onClose}
              className={({ isActive }) =>
                isActive ? "active" : undefined
              }
            >
              About
            </NavLink>

            <NavLink
              to="/services"
              onClick={onClose}
              className={({ isActive }) =>
                isActive ? "active" : undefined
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/contact"
              onClick={onClose}
              className={({ isActive }) =>
                isActive ? "active" : undefined
              }
            >
              Contact
            </NavLink>
          </nav>

          <div className="menu-info">
            <p>
              1940 El Cajon Blvd, San Diego, CA 92104, United States
            </p>

            <a
              href="mailto:info@domain.tld"
              className="email"
            >
              info@domain.tld
            </a>

            <h3>+1 215-606-0391</h3>

            <div className="socials">
              <span>f</span>
              <span>t</span>
              <span>y</span>
              <span>in</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
