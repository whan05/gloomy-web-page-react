import { NavLink } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import "./MenuModal.scss";

export const MenuModal = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

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
              {t("nav.items.home")}
            </NavLink>

            <NavLink
              to="/about"
              onClick={onClose}
              className={({ isActive }) =>
                isActive ? "active" : undefined
              }
            >
              {t("nav.items.about")}
            </NavLink>

            <div className="menu-mobile-group">
              <NavLink
                to="/services"
                onClick={onClose}
                className={({ isActive }) =>
                  isActive ? "active" : undefined
                }
              >
                {t("nav.items.services")}
              </NavLink>

              <div className="menu-mobile-submenu">
                <NavLink
                  to="/websites"
                  onClick={onClose}
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  {t("nav.items.websites")}
                </NavLink>

                <NavLink
                  to="/design"
                  onClick={onClose}
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  {t("nav.items.design")}
                </NavLink>
              </div>
            </div>

            <NavLink
              to="/our-work"
              onClick={onClose}
              className={({ isActive }) =>
                isActive ? "active" : undefined
              }
            >
              {t("nav.items.ourWork")}
            </NavLink>

            <NavLink
              to="/contact"
              onClick={onClose}
              className={({ isActive }) =>
                isActive ? "active" : undefined
              }
            >
              {t("nav.items.contact")}
            </NavLink>
          </nav>

          <div className="menu-info">
            <p>
              {t("footer.addressLine1")} {t("footer.addressLine2")}
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
